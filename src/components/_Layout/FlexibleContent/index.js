import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import TextBlock from "../../_Organisms/TextBlock"
import { AiFillFilePdf} from "react-icons/ai"

function FlexibleContent(props) {
  const { content } = props || {}

  return (
    <div className="flex flex-col my-16 space-y-16 lg:my-32 lg:space-y-32">
      {content.map((item, i) => {
        if (item.model.apiKey === "text_block") {
          return <TextBlock data={item} key={item.id} />
        } else if (item.model.apiKey === "image_block") {
          return item.images.map((img) => {
            return (
              <div className="container container--lg" key={item.id}>
                <GatsbyImage
                  className={
                    item.fullWidth
                      ? "w-full h-auto block"
                      : "w-auto h-auto block"
                  }
                  image={img.gatsbyImageData}
                  alt="Been Coffee"
                />
              </div>
            )
          })
        } else if (item.model.apiKey === "video_block") {
          return (
            <div className="container container--sm">
              <video
                width={item.video.width}
                height={item.video.height}
                controls
                className="w-auto max-w-full mx-auto"
              >
                <source src={item.video.url} />
              </video>
            </div>
          )
        } else if (item.model.apiKey === "download_block") {
          return (
            <ul className="container flex flex-col gap-4 list-none container--sm">
              {item.pdfs.map((pdf) => {
                return (
                  <li key={pdf.title}>
                    <a className="flex flex-row items-center gap-4 p-4 bg-white shadow hover:lg:bg-gray-200 rounded-xl" href={pdf.url} target="_blank" rel="noopener noreferrer">
                      <AiFillFilePdf className="text-red-500" /> {pdf.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          )
        }
      })}
    </div>
  )
}

export default FlexibleContent
