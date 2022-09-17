import React from "react"
import BackButton from "../_Atoms/BackButton"
import Button from "../_Atoms/Button"

export default function Hero({ title, subtitle, category, goBack }) {
  return (
    <section className="bg-white shadow-xl">
      <div className="container flex flex-col items-start gap-6 p-4 py-8">
        <div className="flex flex-col gap-2">
          <h1>{title}</h1>
          {subtitle ? (
            <h2 className="m-0 text-tuscany-500">{subtitle}</h2>
          ) : null}
        </div>
        {category ? (
          <div className="flex flex-row gap-2 mb-4">
            {category.map((cat) => {
              return (
                <Button className="text-2xs" url={`/${cat.slug}`}>
                  {cat.title}
                </Button>
              )
            })}
          </div>
        ) : null}
        {goBack ? <BackButton /> : null}
      </div>
    </section>
  )
}
