import React from 'react'
import HeaderHook from '../examples/Header-Hooks';
import HeaderStatic from '../examples/Header-Static';
import { graphql } from 'gatsby'
import Layout from '../component/Layout';

const example = (props) => {
  const { name, age } = props.data.site.siteMetadata.data;
  return (
    <Layout>
      ecxample page
    <HeaderHook />
      <HeaderStatic />
      <div>
        <h1>
          name : {name}
        </h1>
        <h3>
          age: {age}
        </h3>
      </div>

    </Layout>
  )
}
export const data = graphql`
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
