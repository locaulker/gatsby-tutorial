import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/Header"
import HeaderStaticOld from "../examples/HeaderStaticOld"
import { graphql } from "gatsby"

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data
  return (
    <Layout>
      <p>Hello from examples page</p>
      <Header />
      <HeaderStaticOld />
      <h5>Author: {author}</h5>
    </Layout>
  )
}

export default examples
