import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

class BlogList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pageNumArray: [1] }
  }

  componentDidMount() {
    this.setPageArray()
  }

  componentWillReceiveProps() {
    this.setPageArray()
  }

  setPageArray() {
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const postPerPage = this.props.data.allMarkdownRemark.pageInfo.perPage
    let pageNumArray = Array.from(
      { length: Math.ceil(totalCount / postPerPage) },
      (v, i) => i + 1
    )

    this.setState({ pageNumArray })
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const pathNames = this.props.location.pathname.split("/")
    const page = pathNames[pathNames.length - 1]

    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          return (
            <div key={node.fields.slug}>
              <h1>{title}</h1>
              <b>Date Posted: {node.frontmatter.date}</b>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          )
        })}
        <nav aria-label="Page navigation example">
          <ul className="panigation">
            {this.state.pageNumArray.map(p => (
              <li className={`page-item ${page === p ? "active" : ""}`} key={p}>
                <Link className={`page-link`} to={`blog/page/${p}`}>
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter__date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
      pageInfo {
        perPage
      }
      totalCount
    }
  }
`

export default BlogList
