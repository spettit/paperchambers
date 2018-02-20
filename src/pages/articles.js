import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const ContainerDiv = styled.div`
  background-color: lightgray;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Article = ({post}) => {
  return (
    <li>
      <Link to={post.slug}>{post.title}</Link>
    </li>
  )
}

const IndexPage = ({data}) => {
    console.log(data.contentfulWebsite.posts[0].title)
  return(
    <div>
      <ul>
       {data.contentfulWebsite.posts.map((post) => <Article post ={post} key={post.slug}/>)}
     </ul>
   </div>
)}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    contentfulWebsite (siteName: {eq:"paperchambers"}) {
      posts {
        title
        slug
      }
    }
}
`
