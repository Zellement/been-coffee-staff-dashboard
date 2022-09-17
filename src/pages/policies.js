import React from "react"
import Button from "../components/_Atoms/Button"
import BackButton from "../components/_Atoms/BackButton"
import Seo from "../components/_Seo"
import { Link, graphql } from "gatsby";
import Card from "../components/_Atoms/Card";
import Hero from "../components/_Molecules/Hero";

const PoliciesPage = ({data}) => {

  const post = data.allDatoCmsArticle

  return (
    <>
      <Seo title="Policies" />
      <Hero title="Policies" goBack />

      <section className="container grid grid-cols-1 gap-6 p-4 my-8 md:grid-cols-3 lg:grid-cols-5">
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
