import React from "react"
import { graphql } from "gatsby"
import Button from "../components/_Atoms/Button"
import Hero from "../components/_Molecules/Hero"
import Seo from "../components/_Seo"
import { IoIosOpen } from "react-icons/io"
import FlexibleContent from "../components/_Layout/FlexibleContent"

const Article = ({ data }) => {
  const { title, subtitle, articleContent, category } =
    data.datoCmsArticle || {}
  return (
    <>
      <Seo title={title} />
      <Hero title={title} category={category} goBack subtitle={subtitle} />

      <section className="container p-8">
        <FlexibleContent content={articleContent} />
      </section>
    </>
  )
}

export default Article

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
        ... on DatoCmsImageBlock {
          id
          fullWidth
          model {
            apiKey
          }
          images {
            gatsbyImageData
            customData
          }
        }
        ... on DatoCmsVideoBlock {
          id
          model {
            apiKey
          }
          video {
            url
            width
            height
          }
        }
        ... on DatoCmsDownloadBlock {
          id
          model {
            apiKey
          }
          pdfs {
            url
            title
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
