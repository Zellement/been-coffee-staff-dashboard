import React from "react"
import Button from "../components/_Atoms/Button"
import Seo from "../components/_Seo"
import { IoIosOpen } from "react-icons/io"

const OnboardingPage = () => {
  return (
    <>
      <Seo title="Home" description="Gatsby Starter" />
      <section className="container p-4">
          <h1 className="m-0">Onboarding</h1>
      </section>

      <section className="p-4 content">
          <h2>Welcome to Been Coffee!</h2>
          <p>We're super happy to have you here! :)</p>

          <blockquote>Been Coffee was founded in late 2021 by Martin and Sarah, with a view to offering an alternative to big brand chains and UHT milk coffee machines.</blockquote>

          <a target="_blank" rel="noopener noreferrer" className="inline-flex flex-row items-center gap-2 mt-6 btn" href="https://www.been.coffee">Visit our website to read more <IoIosOpen /></a>
      </section>
    </>
  )
}

export default OnboardingPage
