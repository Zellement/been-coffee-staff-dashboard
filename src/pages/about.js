import React from "react"
import Seo from "../components/_Seo"

const AboutPage = () => {
  return (
    <>
      <Seo title="Home" description="Gatsby Starter" />
      <section className="container">
        <div className="content">
          <h1 className="">About Us Page</h1>
        </div>

        <div className="content">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h2>Lorem ipsum dolor sit amet</h2>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section>
    </>
  )
}

export default AboutPage
