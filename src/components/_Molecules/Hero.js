import { Link, navigate } from "gatsby"
import React from "react"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export default function Hero({ title, subtitle, category, goBack, isHome }) {
  return (
    <section className="bg-white shadow-xl">
      <div className="container py-4 container-padding md:py-6 xl:py-16 grid-layout">
        <div className="flex flex-col col-span-12 gap-2">
          <h1 className="text-tuscany-500">{title}</h1>
          {subtitle ? <h2 className="m-0 ">{subtitle}</h2> : null}
        </div>
        {isHome ? null : (
          <>
          <div className="col-span-12">
          <button onClick={() => navigate(-1)} className="flex flex-row items-center w-auto gap-2 p-1 pl-1 pr-4 mt-4 transition-all duration-300 border border-navy-500 text-navy-500 rounded-3xl hover:bg-butterscotch-500">
            <BsFillArrowLeftCircleFill className="text-lg" /> <span className="font-mono text-2xs whitespace-nowrap">Go Back</span>
          </button>
          </div>
          <nav className="col-span-12 mt-4">
            <ul className="flex flex-row gap-2 text-2xs">
              <li className="flex flex-row items-center gap-2">
                <Link className="underline hover:lg:text-tuscany " to="/">
                  Home
                </Link>
                <span> &raquo;</span>
              </li>
              {category ? (
                <>
                  {category.map((cat, i) => {
                    return (
                      <span key={cat.slug}>
                        <Link
                          className="underline hover:lg:text-tuscany "
                          to={`/category/${cat.slug}`}
                        >
                          {cat.title}
                        </Link>
                        {i + 1 === category.length ? null : <span className="ml-2">&</span>}
                      </span>
                    )
                  })}
                </>
              ) : (
                <li>{title}</li>
              )}
            </ul>
          </nav>
          </>
        )}
      </div>
    </section>
  )
}
