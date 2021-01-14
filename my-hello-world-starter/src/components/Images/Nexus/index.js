import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Nexus = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Nexus.jpg" }) {
        childImageSharp {
          fixed(width: 340, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Nexus