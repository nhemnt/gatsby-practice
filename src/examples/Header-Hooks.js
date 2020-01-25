import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`{
  heamntSite: site {
    siteMetadata {
      title
      author
      data {
        age
      }
    }
  }
}`;

const HeaderHook = () => {
  const { heamntSite: { siteMetadata: info } } = useStaticQuery(getData);
  return (
    <div>
      <h1>Header: {info.author}</h1>
      <h1>Title: {info.title}</h1>
    </div>
  )
}

export default HeaderHook
