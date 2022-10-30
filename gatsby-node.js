require("dotenv").config()

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        articles: allDatoCmsArticle {
          edges {
            node {
              title
              slug
            }
          }
        }
        categories: allDatoCmsCategory {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.articles.edges.forEach(({ node }) => {
    createPage({
      path: "/article/" + node.slug + "/",
      component: require.resolve(`./src/templates/Article.js`),
      context: { slug: node.slug },
    })
  })
  result.data.categories.edges.forEach(({ node }) => {
    createPage({
      path: "/category/" + node.slug + "/",
      component: require.resolve(`./src/templates/Category.js`),
      context: { slug: node.slug },
    })
  })
}

const client = require("@mailchimp/mailchimp_marketing")

client.setConfig({
  apiKey: process.env.MC_KEY,
  server: process.env.MC_CLIENT,
})

let newsletters

const run = async () => {
  newsletters = await client.campaigns.list()
}

run()

exports.sourceNodes = ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  return newsletters.campaigns.map((MailChimp) =>
    createNode({
      ...MailChimp,
      id: createNodeId(MailChimp.id),
      internal: {
        type: `MailChimp`,
        contentDigest: createContentDigest(MailChimp),
      },
    })
  )
}
