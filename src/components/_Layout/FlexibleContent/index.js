import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import TextBlock from "../../Organisms/TextBlock"

function FlexibleContent(props) {
  const { content } = props || {}

  return (
    <div className="flex flex-col my-16 space-y-16 lg:my-32 lg:space-y-32">
      {content.map((item, i) => {
        if (item.model.apiKey === "text_block") {
          return <TextBlock data={item} key={item.id} />
        } else if (item.model.apiKey === "image_block") {
          console.log(item.fullWidth)
          return item.images.map((img) => {
            return (
              <div className="container container--lg" key={item.id}>
              <GatsbyImage
                className={item.fullWidth ? 'w-full h-auto block' :  'w-auto h-auto block'}
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
