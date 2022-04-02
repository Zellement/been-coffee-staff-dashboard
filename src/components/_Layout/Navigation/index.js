import React from "react"
import { Link } from "gatsby"

export default function Navigation(props) {
  const { mobileNavOpen } = props || {}

  return (
    <nav
      className={`absolute p-8 inset-0 z-40 w-full transform h-full bg-white lg:translate-x-0 lg:w-auto lg:relative lg:h-auto lg:flex lg:content-end lg:justify-end lg:flex-col ${
        mobileNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className={"flex flex-col lg:flex-row gap-4"}>
        <li>
          <Link className="" activeClassName="is-active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="" activeClassName="is-active" to="/about/">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
