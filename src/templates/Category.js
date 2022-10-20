import React from "react"
import { graphql } from "gatsby"
import Button from "../components/_Atoms/Button"
import Hero from "../components/_Molecules/Hero"
import Card from "../components/_Atoms/Card"
import Seo from "../components/_Seo"
import { IoIosOpen } from "react-icons/io"
import FlexibleContent from "../components/_Layout/FlexibleContent"

const Category = ({ data }) => {
  console.log(data.stickyArticles.edges.length)

  return (
    <>
      <Seo title="Policies" />
      <Hero title={data.category.title} goBack />

      {data.stickyArticles && data.stickyArticles.edges.length > 0 ? (
        <section className="container grid grid-cols-1 gap-6 p-4 my-8 md:grid-cols-3 lg:grid-cols-5">
          {data.stickyArticles.edges.map((item, i) => {
            return (
              <Card
                url={"article/" + item.node.slug}
                sticky
                key={i}
                date={item.node.meta.updatedAt}
                title={item.node.title}
                subtitle={item.node.subtitle}
              />
            )
          })}
        </section>
      ) : null}

      <section className="container grid grid-cols-1 gap-6 p-4 my-8 md:grid-cols-3 lg:grid-cols-5">
        {data.articles.edges.map((item, i) => {
          return (
            <Card
              url={"article/" + item.node.slug}
              key={i}
              date={item.node.meta.updatedAt}
              title={item.node.title}
              subtitle={item.node.subtitle}
            />
          )
        })}
      </section>
    </>
  )
}

export default Category

export const query = graphql`
  query ($slug: String!) {
    articles: allDatoCmsArticle(
      sort: { order: DESC, fields: meta___updatedAt }
      filter: {
        sticky: { ne: true }
        category: { elemMatch: { slug: { eq: $slug } } }
      }
    ) {
      edges {
        node {
          id
          slug
          title
          sticky
          subtitle
          meta {
            updatedAt(formatString: "DD/MM/Y")
          }
        }
      }
    }
    stickyArticles: allDatoCmsArticle(
      sort: { order: DESC, fields: meta___updatedAt }
      filter: {
        sticky: { eq: true }
        category: { elemMatch: { slug: { eq: $slug } } }
      }
    ) {
      edges {
        node {
          id
          slug
          title
          sticky
          subtitle
          meta {
            updatedAt(formatString: "DD/MM/Y")
          }
        }
      }
    }
    category: datoCmsCategory(slug: { eq: $slug }) {
      slug
      title
    }
  }
`
