import React, { Component } from 'react'
import { Route } from 'react-router'
import Header from './header/Header'
import PostList from './postList/PostList'
import EditCreatePost from './postList/post/EditCreatePost'
import * as PostsApi from '../api/postApi'
import { connect } from 'react-redux'
import { getPosts } from '../actions/index'
import { BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    PostsApi.getAllPosts()
      .then(data => this.props.getAllPosts(data))
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' component={PostList} />
              <Route exact path="/editCreatePost" component={EditCreatePost} />
              <Route exact path="/:cat" component={PostList} />
              <Route exact path="/editCreatePost/:id" component={EditCreatePost} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

const mapDistpactToProps = (dispatch) => {
  return {
    getAllPosts: (posts) => dispatch(getPosts(posts))
  }
}

export default connect(mapStateToProps, mapDistpactToProps)(App)