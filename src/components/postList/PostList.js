import React, { Component } from 'react'
import Post from './post/Post'
import arraySort from 'array-sort'
import { connect } from 'react-redux'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = { sortBy: 'voteScore' }
    this.changeOrderFilter = this.changeOrderFilter.bind(this)
  }

  changeOrderFilter(e) {
    this.setState({ sortBy: e.target.value })
  }

  render() {

    const list = this.props.match.url.replace("/", "") === "" ?
      this.props.posts :
      this.props.posts.filter(p => p.category === this.props.match.url.replace("/", ""))
      
    console.log(list)
    return (<div className="container">
      <div className='d-block text-right mb-3'>
        sortby:
        <select onChange={this.changeOrderFilter} name="sortBy" id="" className='ml-2' defaultValue={this.state.sortBy} >
          <option value="timestamp">Date</option>
          <option value="voteScore">Votes</option>
        </select>
      </div>
      <div>
        {arraySort(list, this.state.sortBy).map((p, i) => <Post key={i} post={p} />)}
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  }
}

export default connect(mapStateToProps)(PostList)