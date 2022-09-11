import React from "react"
import { Link } from "gatsby";

export default function Card({url, title, subtitle}){
  return (
    <Link to={`/${url}`} className="flex flex-col gap-2 p-6 text-left bg-white shadow-lg rounded-xl">
      <h2>{title}</h2>
      { subtitle ? <p>{subtitle}</p> : null}
    </Link>
  )
}