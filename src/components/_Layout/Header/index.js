import React, { useState } from "react"
import { Link } from "gatsby"
import MobileNavButton from "../Navigation/MobileNavButton"
import LoginButton from "../../_Atoms/LoginButton"
import LogoutButton from "../../_Atoms/LogoutButton"
import Logo from "../../_Atoms/Logo"
import { useAuth0 } from "@auth0/auth0-react"
import { StaticImage } from "gatsby-plugin-image"

export default function Header(props) {
  const { siteTitle, className } = props || {}

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className={`block-padding text-white bg-navy-500 ${className}`}>
      <div className="flex flex-col items-start w-full text-left ">
        <div className="flex flex-col items-center justify-between w-full gap-2 text-left lg:flex-col block-padding">
          <div className="flex flex-col items-center gap-2">
            <StaticImage
              placeholder="blurred"
              className="w-full h-auto  bg-navy-500 max-w-[30px]"
              src="../../../images/been-staff-dashboard.png"
            />
            <h1 className="opacity-50 text-2xs">Staff Dashboard</h1>
          </div>
          <div className="flex flex-col w-full gap-2">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  )
}
