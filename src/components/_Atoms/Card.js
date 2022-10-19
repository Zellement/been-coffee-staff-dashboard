import React from "react"
import { Link } from "gatsby"
import { RiPushpin2Fill } from 'react-icons/ri'

export default function Card({ url, title, subtitle, date, sticky }) {
  return (
    <Link
      to={`/${url}`}
      className={`relative flex flex-col gap-2 p-6 text-left bg-white border border-white shadow-lg hover:border-opacity-40 hover:border-navy-50 rounded-xl hover:shadow-xl ${sticky ? 'border-butterscotch-500' : ''}`}
    >
      <div className="flex justify-between w-full gap-4">
        { sticky ? <span className="absolute top-0 right-0 flex p-1.5 overflow-hidden -translate-y-4 rounded-full bg-butterscotch"><RiPushpin2Fill /></span> : null }
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
