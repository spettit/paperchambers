import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  render() {
    let imagePath = '';
    const { title } = this.props.data.contentfulPost
    if (this.props.data.contentfulPost.image) {
      const { url } = this.props.data.contentfulPost.image.file
      console.log(url);
      imagePath = 'https:' + url;
    }

    return (
    <div>
      <h1>{title}</h1>
      <img src={imagePath} />
    </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.object.isRequired
}

export default Article;

export const articleQuery = graphql`
  query articleQuery($slug: String!){
    contentfulPost(slug: {eq: $slug}) {
      title
      slug
      image {
        file {
          url
        }
      }
    }
  }
`
