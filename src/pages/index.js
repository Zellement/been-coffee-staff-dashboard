import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { Link } from "gatsby";
import Hero from "../components/_Molecules/Hero";
import Card from "../components/_Atoms/Card";

const IndexPage = () => {
  return (
    <>
      <Seo title="Home"/>
      <Hero title="Dashboard" />

      <section className="container grid grid-cols-1 gap-6 p-4 my-8 md:grid-cols-3 lg:grid-cols-5">

            <Card url={"policies"} title="Policies" subtitle={"Links to our policies, including our Holiday policy and Food, Drink & Discount policy."} />

      </section>
    </>
  )
}

export default IndexPage
