import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Seo from "../components/_Seo"
import Hero from "../components/_Molecules/Hero"

const MePage = () => {
  const { isAuthenticated, user } = useAuth0()


  return (
    isAuthenticated && (
    <>
      <Seo title="Me" />
      <Hero title={`Hello, ${user.name}`} subtitle="Check the details we have on file for you here" />

      <section className="container grid grid-cols-1 gap-6 p-4 my-8 md:grid-cols-3 lg:grid-cols-5">

        <ul>

          <li>Birthday</li>
          <li>Birthday</li>
          <li>Birthday</li>
        </ul>

      </section>

    </>
    )
  )
}

export default MePage
