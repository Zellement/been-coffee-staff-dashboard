import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Auth0 from "./Auth0"

import Header from "./Header"

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = (props) => {
  const { children, location } = props || {}
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <Header className="lg:col-span-4" siteTitle={data.site.siteMetadata.title} />
        <Auth0 className="lg:col-span-8 lg:col-start-5">
            {children}
        </Auth0>
    </div>
  )
}

export default Layout
