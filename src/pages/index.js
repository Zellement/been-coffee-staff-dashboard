import React from "react"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"
import Card from "../components/_Atoms/Card"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiMoneyPoundBoxFill, RiTruckFill } from "react-icons/ri"
import { BsInfoCircleFill } from "react-icons/bs"
import { BsExclamationTriangleFill } from "react-icons/bs"
import OrderCard from "../components/_Atoms/OrderCard"

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
            <h2>Last 30 Orders</h2>
            <div className="w-full py-8 overflow-x-scroll breakout">
              <div className="flex flex-row w-full pl-4 space-x-4 ">

                {orders.edges.map((item, i) => {
                  return (
                    <OrderCard item={item} />
                  )
                })}
              </div>
            </div>
          </section>
          <div className="">
            <h2>Article Categories</h2>
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
    allDatoCmsOrder(sort: {fields: expectedDeliveryDate, order: DESC}, limit: 30) {
      edges {
        node {
          orderId
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
