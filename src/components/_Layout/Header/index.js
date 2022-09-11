import React, { useState } from "react"
import { Link } from "gatsby"
// import MobileNavButton from "../Navigation/MobileNavButton"
import LoginButton from "../../_Atoms/LoginButton"
import LogoutButton from "../../_Atoms/LogoutButton"
import { StaticImage } from "gatsby-plugin-image"

export default function Header(props) {
  const { className } = props || {}

  // const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className={` text-white bg-navy-500 ${className}`}>
      <div className="flex flex-col items-start w-full text-left ">
        <div className="flex flex-col items-center justify-between w-full gap-2 text-left lg:flex-row block-padding">
          <Link to="/" className="flex flex-col items-center gap-2">
            <StaticImage
              placeholder="blurred"
              alt="Been Coffee Staff Dashboard logo"
              className="w-full h-auto  bg-navy-500 max-w-[30px]"
              src="../../../images/been-staff-dashboard.png"
            />
            <p className="opacity-50 text-2xs">Staff Dashboard</p>
          </Link>
          <div className="flex flex-col w-full gap-2 lg:w-auto">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  )
}
