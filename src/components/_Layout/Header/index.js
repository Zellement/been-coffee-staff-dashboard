import React, { useState } from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation"
import MobileNavButton from "../Navigation/MobileNavButton"

export default function Header(props) {
  const { siteTitle } = props || {}

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="py-8 md:py-16">
      <div className="container">
        <div className="flex items-center justify-between w-full mb-4">
          <Link className="block text-lg font-bold md:text-xl" to="/">
            {siteTitle}
          </Link>

          <Navigation
            mobileNavOpen={mobileNavOpen}
            setMobileNavOpen={setMobileNavOpen}
          />
        </div>
      </div>

      <MobileNavButton
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
    </header>
  )
}
