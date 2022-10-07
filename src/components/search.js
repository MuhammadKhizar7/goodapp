import React, { Component } from 'react'
import { Link } from 'gatsby'

// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div
            className='item-search p-3 bg-gray-50 hover:bg-blue-600 hover:text-blue-200 border-b-2 last:border-b-0 border-gray-200'
            key={i}
          >
            <Link to={page.url} className='link'>
              <h4>{page.title}</h4>
            </Link>
          </div>
        ))
      } else {
        return ''
      }
    }

    return (
      <div className={this.props.classNames}>
        <input
          className='search__input bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
          type='text'
          onChange={this.search}
          placeholder={'Search'}
        />
        <div className='search__list w-full bg-white mt-10 overflow-y-auto overflow-x-hidden max-h-96'>
          <ResultList />
        </div>
      </div>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach((idx) => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .map((node) => node.node)

      return nodes
    }
  }

  search = (event) => {
    const query = event.target.value
    if (this.state.query.length > 1) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search
