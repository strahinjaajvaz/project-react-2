import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as PostApi from '../../../api/postApi'
import uuid from 'uuid'

class EditCreatePost extends Component {
  constructor(props) {
    super(props)
  }

  savePost() {
    const newPost = {
      id: uuid(),
      timestamp: Date.now(),
      title: this.title.value,
      body: this.body.value,
      author: this.author.value,
      category: this.category.value,
      voteScore: 1,
      deleted: false
    }
    PostApi.addPost(newPost).then(() => console.log('completed'))

  }

  // if edit have the value populated otherwise ignore
  render() {
    return (
      <div className="w-50 mx-auto">
        <div className="form-group">
          <h1 className="text-center">EditCreate Post</h1>
          <label htmlFor="title"> Title</label>
          <input className="form-control form-control-m w-100" ref={(input) => { this.title = input }} type="text" id='title' placeholder="Title" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="sortBy" id="" className='form-control' id='category' ref={(value) => this.category = value}>
            {this.props.cats.map(c => <option value={c.name} key={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" id='body' rows='4' ref={input => this.body = input}></textarea>
        </div>
        <div className="form-group">
          <h1 className="text-center"></h1>
          <label htmlFor="author">Author</label>
          <input className="form-control form-control-m w-100" type="text" id='author' placeholder="Author" ref={input => this.author = input} />
        </div>
        <div className='float-right'>
          <button className="btn btn-outline-success mr-4" onClick={this.savePost.bind(this)}>Save</button>
          <button className="btn btn-outline-danger" >Cancel</button>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    post: "",
    cats: state.cats.cats
  }
}

export default connect(mapStateToProps)(EditCreatePost)