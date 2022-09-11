import React from "react"
import { graphql } from "gatsby"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { IoIosOpen } from "react-icons/io"
import FlexibleContent from "../components/_Layout/FlexibleContent"

const TemplateStandard = ({data}) => {

  const { title, subtitle, articleContent, category} = data.datoCmsArticle || {};
  return (
    <>
      <Seo title={title}/>
      <section className="container flex flex-col gap-2 p-4">
        { category ? (
          <div className="flex flex-row gap-2 mb-4">


            {category.map((cat) => {
                return (
                  <Button className="text-2xs" url={`/${cat.slug}`}>{cat.title}</Button>
                )
            })}

          </div>

        ) : null}
          <h1 className="m-0">{title}</h1>
          { subtitle ? <h2 className="m-0 text-tuscany-500">{ subtitle }</h2> : null }
      </section>

      <section className="p-4 content">
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