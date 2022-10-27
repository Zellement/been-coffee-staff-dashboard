import { Link } from "gatsby"
import React from "react"

export default function Hero({ title, subtitle, category, goBack, isHome }) {
  return (
    <section className="bg-white shadow-xl">
      <div className="container py-4 container-padding md:py-6 xl:py-16 grid-layout">
        <div className="flex flex-col col-span-12 gap-2">
          <h1 className="text-tuscany-500">{title}</h1>
          {subtitle ? <h2 className="m-0 ">{subtitle}</h2> : null}
        </div>
        {isHome ? null : (
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
                      <>
                        <Link
                          key={i}
                          className="underline hover:lg:text-tuscany "
                          to={`/category/${cat.slug}`}
                        >
                          {cat.title}
                        </Link>
                        {i + 1 === category.length ? null : <span>&</span>}
                      </>
                    )
                  })}
                </>
              ) : (
                <li>{title}</li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </section>
  )
}
