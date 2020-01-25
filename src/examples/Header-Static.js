import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql`
  {
    heamntSite: site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`
const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return <div> {data.heamntSite.siteMetadata.description}</div>
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic
