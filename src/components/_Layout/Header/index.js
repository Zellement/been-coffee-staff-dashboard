import React, { useState } from "react"
import { Link } from "gatsby"
import MobileNavButton from "../Navigation/MobileNavButton"
import LoginButton from "../../_Atoms/LoginButton"
import LogoutButton from "../../_Atoms/LogoutButton"
import Logo from "../../_Atoms/Logo"
import { useAuth0 } from "@auth0/auth0-react"

export default function Header(props) {
  const { siteTitle, className } = props || {}

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className={`block-padding ${className}`}>
      <div className="flex flex-col items-start w-full text-left ">
        <div className="flex flex-row items-center justify-between w-full text-left lg:flex-col block-padding">
          <Logo className="block max-w-[80px] lg:mb-8" />

          <div className="flex flex-col gap-2">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  )
}
