import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

export const Header = () => {
  const { site } = useStaticQuery(graphql`{
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
  console.log(site);
  return (
    <div>
      <h1>Header</h1>
      <h1>Title: {site.siteMetadata.title}</h1>
    </div>
  )
}

export default Header
