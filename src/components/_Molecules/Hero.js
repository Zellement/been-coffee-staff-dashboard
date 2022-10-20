import { Link } from "gatsby"
import React from "react"
import BackButton from "../_Atoms/BackButton"
import Button from "../_Atoms/Button"

export default function Hero({ title, subtitle, category, goBack, isHome }) {
  return (
    <section className="bg-white shadow-xl">
      <div className="container flex flex-col items-start gap-6 p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-tuscany-500">{title}</h1>
          {subtitle ? <h2 className="m-0 ">{subtitle}</h2> : null}
        </div>
        {/* {category ? (
          <div className="flex flex-col gap-1">
            <p className="leading-none m-0 mb-1.5 text-[10px] uppercase opacity-50">
              Categories
            </p>
            <div className="flex flex-row gap-2">
              {category.map((cat, i) => {
                return (
                  <Button
                    key={i}
                    className="text-2xs"
                    url={`/category/${cat.slug}`}
                  >
                    {cat.title}
                  </Button>
                )
              })}
            </div>
          </div>
        ) : null} */}
        {isHome ? null : (
          <nav>
            <ul className="flex flex-row gap-2 text-2xs">
              <li>
                <Link 
                    className="hover:lg:text-tuscany"
                    to="/">Home</Link> /
              </li>
              { category ? <>
              {category.map((cat, i) => {
                return (
                  <Link
                    key={i}
                    className="hover:lg:text-tuscany"
                    to={`/category/${cat.slug}`}
                  >
                    ~ {cat.title}
                  </Link>
                )
              })}</> : 
                <li>{ title }</li> }
            </ul>
          </nav>
        )}
      </div>
    </section>
  )
}
