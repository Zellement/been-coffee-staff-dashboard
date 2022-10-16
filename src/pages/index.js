import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"
import Card from "../components/_Atoms/Card"
import { Link, graphql } from "gatsby";

const IndexPage = ({data}) => {

  const category = data.allDatoCmsCategory

  console.log(data)
  return (
    <>
      <Seo title="Home" />
      <Hero title="Dashboard" subtitle="Been Coffee employee dashboard" />

      <section className="container grid grid-cols-1 gap-6 p-4 my-8 md:grid-cols-3 lg:grid-cols-5">
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


    </>
  )
}
export const query = graphql`
  query IndexQuery {
    allDatoCmsCategory(sort: {fields: title, order: ASC}) {
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
