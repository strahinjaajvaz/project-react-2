import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategoties } from '../../actions/index'
import * as CategoriesApi from '../../api/catApi'
import { Link } from 'react-router-dom'

class Header extends Component {
  componentDidMount() {
    CategoriesApi.getAllCategories()
      .then((data) => {
        this.props.getCats(data.categories)
      });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div className="container">
          <Link className="navbar-brand" to='/'>Navbar</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ml-auto navbar-nav">
              {
                this.props.cats.map(x =>
                  <li className="nav-item" key={x.path}><Link className="nav-link" to={x.path}>{x.name}</Link></li>)
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats.cats
  }
}

const mapDistpactToProps = (dispatch) => {
  return {
    getCats: (cats) => dispatch(getCategoties(cats))
  }
}

export default connect(mapStateToProps, mapDistpactToProps)(Header)