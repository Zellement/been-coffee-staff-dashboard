import React from "react"
import { Link } from "gatsby"

export default function Card({ url, title, subtitle, date }) {
  return (
    <Link
      to={`/${url}`}
      className="flex flex-col gap-2 p-6 text-left bg-white border border-white shadow-lg hover:border-opacity-40 hover:border-navy-50 rounded-xl hover:shadow-xl"
    >
      <div className="flex justify-between w-full gap-4">
        <h2>{title}</h2>
        {date ? (
          <span className="opacity-50 text-[10px] whitespace-nowrap mt-1 flex flex-col items-end">
            <span className="leading-none">Updated</span>
            <span className="leading-none">{date}</span>
          </span>
        ) : null}
      </div>
      {subtitle ? <p>{subtitle}</p> : null}
    </Link>
  )
}
