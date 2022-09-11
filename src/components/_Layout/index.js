import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Auth0 from "./Auth0"

import Header from "./Header"
import Footer from "./Footer"
const Layout = (props) => {
  const { children } = props || {}
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
      <Header className="lg:col-span-3" siteTitle={data.site.siteMetadata.title} />
        <Auth0 className="lg:col-span-9 lg:col-start-4">
            {children}
            <Footer />
        </Auth0>
    </div>
  )
}

export default Layout
