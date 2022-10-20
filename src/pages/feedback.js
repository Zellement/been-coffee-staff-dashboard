import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"
import ContactFormFeedback from "../components/_Molecules/ContactFormFeedback"

const MePage = () => {
  const { isAuthenticated, user } = useAuth0()
  console.log(user)

  return (
    isAuthenticated && (
    <>
      <Seo title="Feedback" />
      <Hero title={`Feedback`} subtitle="What can be better about the Staff Dashboard?" />

      <section className="max-w-screen-sm mx-auto my-16">

        <ContactFormFeedback />

      </section>

    </>
    )
  )
}

export default MePage
