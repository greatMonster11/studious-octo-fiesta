import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import _ from "lodash"

//Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${_.capitalize(tag)}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const { title, date } = node.frontmatter

        return (
          <div key={slug}>
            <h1>{title}</h1>
            <b>Date Posted: {date}</b>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        )
      })}
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
