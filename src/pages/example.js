import React from 'react'
import HeaderHook from '../examples/Header-Hooks';
import HeaderStatic from '../examples/Header-Static';
import {graphql} from 'gatsby'
const example = () => {
  console.log(data)
  return (
    <div>
      ecxample page
    <HeaderHook />
      <HeaderStatic />
    </div>
  )
}
const data = graphql`
{
  site {
    siteMetadata {
      title
      description
      author
      data {
        age
        name
      }
    }
  }
}
`

export default example
