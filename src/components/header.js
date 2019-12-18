import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import _ from "lodash"
import "./header.css"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark">
    <a className="navbar-brand" href="#">
      {siteTitle}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="blog/page/1" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <StaticQuery
              query={graphql`
                query CategoryQuery {
                  allMarkdownRemark(limit: 2000) {
                    group(field: frontmatter___tags) {
                      fieldValue
                    }
                  }
                }
              `}
              render={data => {
                return data.allMarkdownRemark.group.map(g => {
                  return (
                    <Link to={`tags/${g.fieldValue}`} className="dropdown-item">
                      {_.capitalize(g.fieldValue)}
                    </Link>
                  )
                })
              }}
            />
          </div>
        </li>
      </ul>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
