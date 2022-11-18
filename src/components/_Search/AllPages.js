import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"

export default function AllPages(props) {

  const allPages = useStaticQuery(graphql`
    query allPagesQuery {
      allDatoCmsArticle {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
    
  `)


  const filteredData = allPages.allDatoCmsArticle.edges.filter((el) => {
    //if no input the return the original
    if (props === '') {
      console.dir(filteredData)
        return el;
    }
    //return the item which contains the user input
    else {
      console.dir(filteredData)
      return el.node.title.toLowerCase().includes(props)

    }
})
return (
    <ul>
        {filteredData.map((item) => (
            <li key={item.id}>{item.node.title}</li>
        ))}
    </ul>
)

}
