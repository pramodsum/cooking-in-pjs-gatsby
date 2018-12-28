import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { withStyles } from '@material-ui/core';

import Layout from '../components/Layout'

const styles = {

};

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.ghostPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = get(this.props, 'data.site.siteMetadata.description')
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.title} | ${siteTitle}`}
        />
        <h1>{post.title}</h1>
        <p>
          {post.published_at}
        </p>
        { post.feature_image &&
          <img src={process.env.GHOST_API_URL + post.feature_image} />
        }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {
              previous &&
              <Link to={previous.slug} rel="prev">
                ← {previous.title}
              </Link>
            }
          </li>
          <li>
            {
              next &&
              <Link to={next.slug} rel="next">
                {next.title} →
              </Link>
            }
          </li>
        </ul>
      </Layout>
    )
  }
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    ghostPost(slug: { eq: $slug }) {
      html
      title
      slug
      feature_image: image
      published_at(formatString: "DD MMMM, YYYY")
    }
  }
`
