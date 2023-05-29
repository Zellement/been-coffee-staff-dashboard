import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

export default function AllPages({ input, setShowModal }) {

  const allPages = useStaticQuery(graphql`
    query allPagesQuery {
      allDatoCmsArticle(sort: {fields: title, order: ASC})  {
        edges {
          node {
            id
            title
            slug
            meta {
              updatedAt(formatString: "YYYY/MM/DD")
            }
          }
        }
      }
    }
    
  `)


  const filteredData = allPages.allDatoCmsArticle.edges.filter((el) => {
    //if no input the return the original
    if (input === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.node.title.toLowerCase().includes(input)
    }
  })
  return (
    <ul className="flex flex-col w-full h-full max-w-screen-md gap-2 overflow-y-auto lg:flex-1 lg:place-content-center">
      {filteredData.map((item) => (
        <li className="w-full" key={item.node.title}><Link onClick={() => setShowModal(false)} className="block hover:lg:text-butterscotch-500" to={`/article/` + item.node.slug + `/`}>{item.node.title} <span className="font-mono opacity-50 text-[12px] whitespace-nowrap">{item.node.meta.updatedAt}</span></Link></li>
      ))}
    </ul>
  )

}
