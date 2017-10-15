import React, { Component } from 'react'
import Post from './post/Post'
import arraySort from 'array-sort'

class PostList extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)
    this.state = { sortBy: 'voteScore' }
    this.changeOrderFilter = this.changeOrderFilter.bind(this)
  }

  changeOrderFilter(e){
    this.setState({sortBy: e.target.value})
  }

  render() {
    return (<div className="container">
      <div className='d-block text-right mb-3'>
        sortby: 
        <select onChange={this.changeOrderFilter} name="sortBy" id="" className='ml-2' >
          <option value="timestamp">Date</option>
          <option value="voteScore">Votes</option>          
        </select>
      </div>
      <div>
        {arraySort(this.props.posts.posts, this.state.sortBy).map((p, i) => <Post key={i} post={p} />)}
      </div>
    </div>)
  }
}


export default PostList