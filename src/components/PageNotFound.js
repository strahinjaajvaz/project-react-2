import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (<div>
    <h1>The Page youve entered doesn't exists</h1>
    <p>Click <Link to="/">here</Link> to return to the homepage</p>
  </div>
  )
}

export default PageNotFound