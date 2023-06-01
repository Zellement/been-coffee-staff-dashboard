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
import { BiCalendar } from "react-icons/bi"

const IndexPage = ({ data }) => {
  const category = data.allDatoCmsCategory
  const orders = data.allDatoCmsOrder
  const team = data.allDatoCmsTeam

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
          <section className="py-8">
            <h2>Team</h2>
            <div className="w-full py-8 overflow-x-scroll breakout">
              <div className="flex flex-row w-full pl-4 space-x-4 ">

                {team.edges.map((item, i) => {
                  return (
                    <div className="relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg">

                      <GatsbyImage
                        className="object-contain w-full h-full"
                        image={item.node.picture.gatsbyImageData}
                        alt="Been Coffee"
                      />

                      <div className="absolute bottom-0 right-0 flex flex-col items-end justify-end text-right ">
                        <span className="px-2 py-1 text-sm rounded-tl bg-seashell font-riverside">{item.node.name}</span>
                        <span className="px-2 py-1 bg-seashell text-3xs">{item.node.role}</span>
                        <span className="flex flex-row items-center gap-2 text-3xs px-2 py-0.5 bg-seashell "><BiCalendar /> {item.node.startDate}</span>
                      </div>

                    </div>
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
    allDatoCmsTeam(sort: {order: ASC, fields: position}) {
      edges {
        node {
          id
          startDate(formatString: "DD MMM YYYY")
          role
          picture {
            gatsbyImageData(width: 200, height: 300)
          }
          name
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
