import { Link } from "gatsby"
import React from "react"
import * as styles from "./button.module.css"

export default function Button(props) {
  const { url, children, external, className } = props || {}

  if(external){
    return (
      <a target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles["btnExternal"]} ${className}`} href={url}>{children}</a>
    )
  }
  return (
    <Link to={url} className={`${styles.btn}  ${className}`}>
      {children}
    </Link>
  )
}
