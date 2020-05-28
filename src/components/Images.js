import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import img from "../images/image-4.jpg"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} alt="Basic" width="100%" />
      </article>
      <article className="single-image">
        <h3>Fixed Image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
