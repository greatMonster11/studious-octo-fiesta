import React, { useEffect } from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    navigate("blog/page/1")
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
