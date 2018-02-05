import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Paper Chambers"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        height: 30,
        backgroundColor: 'darkgreen',
        opacity: .8,
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>

    </div>
    <Navbar />
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
