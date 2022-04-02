import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Navigation from "../Navigation"

export default function Header(props) {
  const { siteTitle } = props || {}

  return (
    <header className="py-8 md:py-16">
      <div className="container">
        <div className="flex flex-wrap items-center mb-4">
          <motion.button
            className="block w-5 h-5 mr-3 bg-black rounded"
            animate={{ rotate: 180 }}
            transition={{
              loop: Infinity,
              duration: 2,
              ease: "anticipate",
            }}
          />

          <Link className="block text-lg font-bold md:text-xl" to="/">
            {siteTitle}
          </Link>
        </div>

        <Navigation />
      </div>
    </header>
  )
}
