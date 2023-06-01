import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiMoneyPoundBoxFill, RiSearchFill, RiTruckFill } from "react-icons/ri"
import { BsInfoCircleFill } from "react-icons/bs"
import { BsExclamationTriangleFill } from "react-icons/bs"
import { BiHash } from "react-icons/bi"

export default function OrderCard({ item }) {
  return (
    <div className="flex flex-col flex-shrink-0 w-3/4 p-4 bg-white shadow-lg rounded-xl lg:w-auto lg:flex-1 lg:p-8">
      <div className="relative flex flex-row items-center justify-between w-full h-32 p-2 mb-8 border border-gray-100">
        <div className="text-3xs">
          <div className="flex flex-row items-center gap-2">
            <h4 className="text-tuscany"><RiTruckFill /></h4>
            <span>{item.node.expectedDeliveryDate}</span>
          </div>
          <div className="flex flex-row items-center gap-2 opacity-50">
            <h4 className="text-tuscany"><RiMoneyPoundBoxFill /></h4>
            <span>{item.node.orderDate}</span>
          </div>
          {item.node.orderId ?
            <div className="flex flex-row items-center gap-2">
              <h4 className="text-tuscany"><BiHash /></h4>
              <span className="">{item.node.orderId}</span>
            </div>
            : null}
        </div>
        {item.node.supplier.logo ?
          <GatsbyImage
            className="object-contain w-full h-full"
            image={item.node.supplier.logo.gatsbyImageData}
            alt="Been Coffee"
          /> :
          <span>{item.node.supplier.name}</span>
        }
      </div>
      <div className="flex flex-col space-y-8">

        <h5 className="flex flex-row items-center gap-4 text-navy"><BsInfoCircleFill className="mt-1" /> <span className="opacity-10">Details</span></h5>
        {item.node.standard ? <p className="italic opacity-30 text-2xs">Standard order for this supplier</p> :
          <div
            className="text-2xs content"
            dangerouslySetInnerHTML={{ __html: item.node.details }} />
        }
        {item.node.notes ?
          <>
            <h5 className="flex flex-row items-center gap-4 pt-8 border-t border-gray-100 text-butterscotch"><BsExclamationTriangleFill className="mt-1" /> <span className="opacity-30">Notes</span></h5>
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