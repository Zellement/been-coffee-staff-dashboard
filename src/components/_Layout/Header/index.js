import React, { useState } from "react"
import { Link } from "gatsby"
// import MobileNavButton from "../Navigation/MobileNavButton"
import LoginButton from "../../_Atoms/LoginButton"
import LogoutButton from "../../_Atoms/LogoutButton"
import Search from "../../_Search"
import { StaticImage } from "gatsby-plugin-image"

export default function Header(props) {
  const { className } = props || {}

  // const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className={`text-white bg-navy-500 ${className}`}>
      <div className="container items-start justify-between w-full py-4 container-padding grid-layout ">
        <Link to="/" className="flex flex-row items-start col-span-4 gap-2">
          <StaticImage
            placeholder="blurred"
            alt="Been Coffee Staff Dashboard logo"
            className="w-full h-auto  bg-navy-500 max-w-[30px]"
            src="../../../images/been-staff-dashboard.png"
          />
          <p className="sr-only">Staff Dashboard</p>
        </Link>
        <div className="flex flex-col col-span-8 col-start-5 gap-2 ">
          <Search />
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}