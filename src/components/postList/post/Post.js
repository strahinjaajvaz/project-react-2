import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
    render() {
      console.log(this.props.post)
      return (
        <div className="card border-light mb-3">
          <div className="card-body">
            <Link to={`/posts/${this.props.post.id}`}><h4 className="card-title d-inline">{this.props.post.title}</h4></Link>
            <small className="text-muted d-inline ml-4">{this.props.post.author}</small>
            <small className="text-muted d-inline float-right">{this.props.post.category}</small>
            <p className="card-body">{this.props.post.body}</p>
          </div>
        </div>
      )
    }
  }

export default Post