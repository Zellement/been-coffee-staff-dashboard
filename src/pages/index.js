import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" description="Gatsby Starter" />
      <section className="container p-4">
          <h1 className="m-0">Dashboard</h1>
      </section>

      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 lg:grid-cols-12">

        <Link to="/policies" className="flex flex-col gap-2 text-left bg-white shadow-lg block-padding rounded-xl">
          <h2>Policies</h2>
          <p>Links to our policies, including our Holiday policy and Food, Drink & Discount policy.</p>
        </Link>

      </section>
    </>
  )
}

export default IndexPage
