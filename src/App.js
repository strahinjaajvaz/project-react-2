import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCategories, addPosts } from './actions/index'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => { this.props.cats({ name: "stra" }) }}>Add cat</button>
        <button onClick={() => { this.props.posts({ age: 23 }) }}>Add post</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    state
  }
}

const mapDispatchToState = (dispatch) => {
  return {
    cats: (cat) => dispatch(addCategories(cat)),
    posts: (post) => dispatch(addPosts(post))
  }
}

export default connect(mapStateToProps, mapDispatchToState)(App)
