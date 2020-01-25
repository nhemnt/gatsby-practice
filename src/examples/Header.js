import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

export const Header = () => {
  const { site: { siteMetadata: info } } = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
        author
        data {
          age
        }
      }
    }
  }`)
  return (
    <div>
      <h1>Header: {info.author}</h1>
      <h1>Title: {info.title}</h1>
    </div>
  )
}

export default Header
