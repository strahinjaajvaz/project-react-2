import React, { Component } from 'react'
import { Route } from 'react-router'
import Header from './header/Header'
import PostList from './postList/PostList'
import * as PostsApi from '../api/postApi'
import { connect } from 'react-redux'
import { getPosts } from '../actions/index'

class App extends Component {

  componentDidMount() {
    PostsApi.getAllPosts()
      .then(data => this.props.getAllPosts(data))
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Route exact path='/' component={(props) => <PostList cat='all' posts={this.props.posts}/>} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

const mapDistpactToProps = (dispatch) => {
  return {
    getAllPosts: (posts) => dispatch(getPosts(posts))
  }
}

export default connect(mapStateToProps, mapDistpactToProps)(App)