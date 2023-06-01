import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function OrderCard({ item }) {
  return (
    <div className="flex flex-col flex-shrink-0 w-3/4 p-4 bg-white shadow-lg rounded-xl lg:w-auto lg:min-w-[250px] md:w-2/5 lg:w-1/4">
      <div className="relative grid items-center justify-between w-full grid-cols-2 gap-8 p-2 mb-8 border border-gray-100">
        <div className="text-3xs" >
          {item.node.deliverySchedule}
        </div>
        {
          item.node.supplier.logo ?
            <GatsbyImage
              className="w-full h-full ml-auto"
              image={item.node.supplier.logo.gatsbyImageData}
              alt="Been Coffee"
            /> :
            <span>{item.node.supplier.name}</span>
        }
      </div >
      <div className="flex flex-col space-y-8">

        <div
          className="text-2xs content"
          dangerouslySetInnerHTML={{ __html: item.node.details }} />

      </div>
    </div >
  )
}