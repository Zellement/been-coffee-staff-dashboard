import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { Link, graphql } from "gatsby";
import Card from "../components/_Atoms/Card";

const PoliciesPage = ({data}) => {

  const post = data.allDatoCmsArticle

  console.log(data)
  return (
    <>
      <Seo title="Policies" />
      <section className="container p-4">
          <h1 className="m-0">Policies</h1>
      </section>

      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 lg:grid-cols-5">
        {post.edges.map((item, i) => {
          return (
            <Card url={item.node.slug} title={item.node.title} subtitle={item.node.subtitle} />
          )
        })}
      </section>
    </>
  )
}


export const query = graphql`
query PoliciesQuery {
  allDatoCmsArticle(filter: {category: {elemMatch: {slug: {eq: "policies"}}}}) {
    edges {
      node {
        id
        slug
        title
        subtitle
      }
    }
  }
}

`

export default PoliciesPage
