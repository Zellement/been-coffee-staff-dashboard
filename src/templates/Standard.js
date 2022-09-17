import React from "react"
import { graphql } from "gatsby"
import Button from "../components/_Atoms/Button"
import Hero from "../components/_Molecules/Hero"
import Seo from "../components/_Seo"
import { IoIosOpen } from "react-icons/io"
import FlexibleContent from "../components/_Layout/FlexibleContent"

const TemplateStandard = ({data}) => {

  const { title, subtitle, articleContent, category} = data.datoCmsArticle || {};
  return (
    <>
      <Seo title={title}/>
      <Hero title={title} category={category} goBack subtitle={subtitle} />

      <section className="container p-4 my-8 content">
        <FlexibleContent  content={articleContent} />
      </section>
    </>
  )
}

export default TemplateStandard

export const query = graphql`
query ($slug: String!) {
  datoCmsArticle(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      articleContent {
        ... on DatoCmsTextBlock {
          id
          text
          model {
            apiKey
          }
        }
      }
      category {
        id
        slug
        title
      }
    }
  }
`