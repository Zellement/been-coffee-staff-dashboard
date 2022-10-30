import React from "react"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"
import { Link, graphql } from "gatsby"
import { AiFillCalendar } from "react-icons/ai"

const NewslettersPage = ({ data }) => {
  const newsletters = data.allMailChimp
  return (
    <>
      <Seo title="Newsletters" />

      <Hero title="Newsletters" subtitle="All of our previous newsletters" />
      <section className="container p-4">
        <div className="flex flex-col max-w-screen-sm gap-8 mx-auto my-16 ">
          {newsletters.nodes.map((newsletter, i) => {
            return (
              <a
                href={newsletter.archive_url}
                className="flex flex-col p-8 bg-white shadow-xl rounded-xl hover:lg:bg-butterscotch-500"
                target="_blank"
              >
                <span className="flex flex-row items-center gap-4 opacity-50">
                  <AiFillCalendar /> <span>{newsletter.send_time}</span>
                </span>
                <h2 className="font-riverside">{newsletter.settings.title}</h2>{" "}
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query NewsletterQuery {
    allMailChimp(sort: { fields: send_time, order: DESC }) {
      nodes {
        id
        archive_url
        send_time(formatString: "DD/MM/YYYY")
        settings {
          title
        }
      }
    }
  }
`

export default NewslettersPage
