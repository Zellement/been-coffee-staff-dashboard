import React from "react"
import { Link } from "gatsby";

export default function Card({url, title, subtitle}){
  return (
    <Link to={`/${url}`} className="flex flex-col gap-2 p-6 text-left bg-white border border-white shadow-lg hover:border-opacity-40 hover:border-navy-50 rounded-xl hover:shadow-xl">
      <h2>{title}</h2>
      { subtitle ? <p>{subtitle}</p> : null}
    </Link>
  )
}