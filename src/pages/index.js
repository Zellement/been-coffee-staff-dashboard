import React from "react"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"
import Card from "../components/_Atoms/Card"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiMoneyPoundBoxFill, RiTruckFill } from "react-icons/ri"
import { BsInfoCircleFill } from "react-icons/bs"
import { BsExclamationTriangleFill } from "react-icons/bs"

const IndexPage = ({ data }) => {
  const category = data.allDatoCmsCategory
  const orders = data.allDatoCmsOrder

  console.log(orders)

  return (
    <>
      <Seo title="Home" />
      <Hero
        title="Dashboard"
        isHome
        subtitle="Been Coffee employee dashboard"
      />

      <div className="container container-padding">
        <div className="grid grid-cols-1">
          <section className="py-8">
            <h2>Last 20 Orders</h2>
            <div className="w-full py-8 overflow-x-scroll breakout">
              <div className="flex flex-row w-full pl-4 space-x-4 ">

                {orders.edges.map((item, i) => {
                  return (
                    <div className="flex flex-col flex-shrink-0 w-3/4 p-8 bg-white shadow-lg rounded-xl lg:w-1/4">
                      <div className="flex items-center justify-center w-full h-40 p-2 mb-8 border border-gray-100">
                        {item.node.supplier.logo ?
                          <GatsbyImage
                            className="object-contain w-full h-full"
                            image={item.node.supplier.logo.gatsbyImageData}
                            alt="Been Coffee"
                          /> :
                          <span>{item.node.supplier.name}</span>
                        }
                      </div>
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-row items-center justify-between">
                          <h4 className="text-tuscany"><RiTruckFill /></h4>
                          <span>{item.node.expectedDeliveryDate}</span>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <h4 className="text-tuscany"><RiMoneyPoundBoxFill /></h4>
                          <span>{item.node.orderDate}</span>
                        </div>
                        <h5 className="pt-4 border-t border-grey-200 text-navy"><BsInfoCircleFill /></h5>
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
                })}
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 gap-6 my-8 md:grid-cols-3 lg:grid-cols-3">
            {category.edges.map((item, i) => {
              return (
                <Card
                  key={item.node.slug}
                  url={"category/" + item.node.slug}
                  title={item.node.title}
                  subtitle={item.node.subtitle}
                />
              )
            })}
          </section>
        </div>
        <section className="container p-8 mt-16 content bg-butterscotch-200 rounded-xl">
          <h2>Got an idea to improve this dashboard?</h2>

          <p>Get in touch with Dan:</p>
          <ul>
            <li>
              Email: <a href="mailto:dan@been.coffee">dan@been.coffee</a>
            </li>
            <li>
              WhatsApp:{" "}
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/07900145741">
                07900 145 741
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export const query = graphql`
  query IndexQuery {
    allDatoCmsCategory(sort: { fields: title, order: ASC }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
    allDatoCmsOrder(sort: {fields: expectedDeliveryDate, order: DESC}, limit: 20) {
      edges {
        node {
          id
          standard
          orderDate(formatString: "ddd D MMM YYYY")
          expectedDeliveryDate(formatString: "ddd D MMM YYYY")
          detailsNode {
            id
          }
          details
          notes
          supplier {
            usualDeliveryDay
            logo {
              gatsbyImageData(width: 65, layout: FIXED)
            }
            name
          }
        }
      }
    }
  }
`

export default IndexPage
