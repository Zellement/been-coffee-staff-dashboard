import React, { useState } from "react"
import { Link } from "gatsby"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import Navigation from "../Navigation"

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

      <button
        aria-label="Navigation menu button"
        tabIndex={0}
        role="button"
        className={`bg-black text-white absolute top-0 right-0 z-50 p-2 m-4 lg:hidden`}
      >
        {mobileNavOpen ? (
          <IoMdClose
            className="text-2xl"
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen)
            }}
          />
        ) : (
          <RiMenu3Line
            className="text-2xl"
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen)
            }}
          />
        )}
      </button>
    </header>
  )
}
