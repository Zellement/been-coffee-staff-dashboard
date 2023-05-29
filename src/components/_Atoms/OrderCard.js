import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiMoneyPoundBoxFill, RiTruckFill } from "react-icons/ri"
import { BsInfoCircleFill } from "react-icons/bs"
import { BsExclamationTriangleFill } from "react-icons/bs"

export default function OrderCard({ item }) {
  return (
    <div className="flex flex-col flex-shrink-0 w-3/4 p-8 bg-white shadow-lg rounded-xl lg:w-1/4">
      <div className="relative flex flex-row items-center justify-between w-full h-40 p-2 mb-8 border border-gray-100">
        {item.node.supplier.logo ?
          <GatsbyImage
            className="object-contain w-full h-full"
            image={item.node.supplier.logo.gatsbyImageData}
            alt="Been Coffee"
          /> :
          <span>{item.node.supplier.name}</span>
        }
        <div className="text-3xs">
          <div className="flex flex-row items-center justify-end gap-2">
            <span>{item.node.expectedDeliveryDate}</span>
            <h4 className="text-tuscany"><RiTruckFill /></h4>
          </div>
          <div className="flex flex-row items-center justify-end gap-2">
            <span>{item.node.orderDate}</span>
            <h4 className="text-tuscany"><RiMoneyPoundBoxFill /></h4>
          </div></div>
      </div>
      <div className="flex flex-col space-y-4">

        <h5 className="text-navy"><BsInfoCircleFill /></h5>
        {item.node.standard ? <p className="italic opacity-30 text-2xs">Standard order for this supplier</p> :
          <div
            className="text-2xs content"
            dangerouslySetInnerHTML={{ __html: item.node.details }} />
        }
        {item.node.notes ?
          <>
            <h5 className="pt-4 border-t text-butterscotch-400 border-grey-200"><BsExclamationTriangleFill /></h5>
            <div
              className="text-2xs content"
              dangerouslySetInnerHTML={{ __html: item.node.notes }} /></>
          :
          null
        }
      </div>
    </div>
  )
}