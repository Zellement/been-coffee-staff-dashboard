import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"

export default function Navigation() {
  return (
    <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col">
      <ul
        className={
          "absolute inset-0 z-50 w-full h-full bg-white md:block md:relative md:inset-auto md:h-auto"
        }
      >
        <li>
          <Link className="" activeClassName="is-active" to="/">
            Home
          </Link>
          <Link className="" activeClassName="is-active" to="/about/">
            About
          </Link>
        </li>
      </ul>

      <div
        aria-label="Navigation menu button"
        tabIndex={0}
        role="button"
        className={`bg-black text-white absolute top-0 right-0 z-40 p-2 md:hidden`}
      >
        <RiMenu3Line className="text-2xl" />
      </div>

      <div
        aria-label="Navigation close menu"
        tabIndex={0}
        role="button"
        className={`bg-black text-white absolute top-0 right-0 z-50 p-2 md:hidden`}
      >
        <IoMdClose className="text-2xl" />
      </div>
    </nav>
  )
}
