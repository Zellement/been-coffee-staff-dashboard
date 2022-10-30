import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"
import Card from "../components/_Atoms/Card"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const category = data.allDatoCmsCategory

  return (
    <>
      <Seo title="Home" />
      <Hero
        title="Dashboard"
        isHome
        subtitle="Been Coffee employee dashboard"
      />

      <div className="container container-padding">
        <section className="grid grid-cols-1 gap-6 my-8 md:grid-cols-3 lg:grid-cols-5">
          {category.edges.map((item, i) => {
            return (
              <Card
                url={"category/" + item.node.slug}
                title={item.node.title}
                subtitle={item.node.subtitle}
              />
            )
          })}
        </section>

        <section className="container p-8 mt-16 content bg-butterscotch-200 rounded-xl">
          <h2>Got an idea to improve this dashboard?</h2>

          <p>Get in touch with Dan:</p>
          <ul>
            <li>
              Email: <a href="mailto:dan@been.coffee">dan@been.coffee</a>
            </li>
            <li>
              WhatsApp:{" "}
              <a target="_blank" href="https://wa.me/07900145741">
                07900 145 741
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export const query = graphql`
  query IndexQuery {
    allDatoCmsCategory(sort: { fields: title, order: ASC }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`

export default IndexPage
