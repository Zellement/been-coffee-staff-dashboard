import React, { useState } from "react"
import { Link } from "gatsby"
// import MobileNavButton from "../Navigation/MobileNavButton"
import LoginButton from "../../_Atoms/LoginButton"
import LogoutButton from "../../_Atoms/LogoutButton"
import Search from "../../_Search"
import { StaticImage } from "gatsby-plugin-image"
import { HiSearchCircle } from "react-icons/hi"


export default function Header(props) {
  const { className } = props || {}
  const [ showModal, setShowModal ] = useState(false)

  // const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className={`text-white bg-navy-500 fixed z-[100] top-0 left-0 w-full right-0 ${className}`}>
      <div className="container flex flex-row items-start justify-between w-full py-4 container-padding ">
        <Link to="/" className="flex flex-row items-start gap-2">
          <StaticImage
            placeholder="blurred"
            alt="Been Coffee Staff Dashboard logo"
            className="w-full h-auto  bg-navy-500 max-w-[30px]"
            src="../../../images/been-staff-dashboard.png"
          />
          <p className="sr-only">Staff Dashboard</p>
        </Link>
        <div className="flex flex-row items-center justify-end gap-2 lg:flex-row">
          <button onClick={() => setShowModal(true)} className="flex flex-row items-center py-1 pl-3 pr-1 mr-8 transition-colors duration-300 bg-white rounded-full hover:lg:bg-butterscotch-500 "><span className="uppercase text-[12px] text-navy-500">Search</span><HiSearchCircle className="text-xl text-navy-500" /></button>
          <Search showModal={showModal} setShowModal={setShowModal} />
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}