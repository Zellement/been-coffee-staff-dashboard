import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import TextBlock from "../../Organisms/TextBlock"

function FlexibleContent(props) {
  const { content } = props || {}

  return (
    <div className="flex flex-col space-y-16 lg:space-y-32">
      {content.map((item) => {
        if (item.model.apiKey === "text_block") {
          return <TextBlock data={item} key={item.id} />
        } else if (item.model.apiKey === "image_block") {
          return item.images.map((img) => {
            return (
              <div className="container container--lg">
              <GatsbyImage
                className="w-full h-auto "
                key={img.id}
                image={img.gatsbyImageData}
                alt="Been Coffee"
              />
              </div>
            )
          })
        }
      })}
    </div>
  )
}

export default FlexibleContent
