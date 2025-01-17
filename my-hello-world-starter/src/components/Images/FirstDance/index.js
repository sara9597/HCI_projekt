import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FirstDance = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "FirstDance.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 340, maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
        }
      }
    }
  `)
  return <Img fluid={data.myImage.childImageSharp.fluid} />
}

export default FirstDance