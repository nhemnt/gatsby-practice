import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

import img from '../images/155569320517245233.jpg'

const getImages = graphql`
  {
    fixed: file(relativePath: {eq: "coder-cat-2.png"}) {
      childImageSharp {
        fixed(width: 300, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "hemant-negi.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
}`
const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic"/>
      </article>
      <article>
        <h3>basic image</h3>
        <Image fixed= {data.fixed.childImageSharp.fixed}/>
      </article>
      <article>
        <h3>basic image</h3>
        <Image fluid= {data.fluid.childImageSharp.fluid}/>
      </article>

    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align:center;
text-transform: capitalize;
width: 80vw;
margin: 0 auto 10rem auto;
.basic{
  width:100%;
}
article{
  border: 3px solid red;
  padding: 1rem 0;
}

@media (min-width: 992px){
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
}
`
export default Images
