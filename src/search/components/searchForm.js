import React from 'react';
import SearchResults from './searchResults';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results : [], // Results from search
      loading: false, // Are we still loading the previous results?
      searched: false, // Are we actually even searching (any words in input)?
      active: false,
      query: null,
    }

    this.getResults = this.getResults.bind(this)
    this.activateSearch = this.activateSearch.bind(this)
    this.deactivateSearch = this.deactivateSearch.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)

    this.searchInput = React.createRef()

    this.keyUpTimer = null
  }

  handleKeyUp(e) {
    // Get the input value
    const search = e.target.value

    // At least 3 letters
    if( search && search.length > 2 ) {
      this.setState({ loading: true })

      clearTimeout(this.keyUpTimer)

      this.keyUpTimer = setTimeout(() => {
        this.getResults(search)
      }, 500)
    } else {
      this.setState({
        results: [],
        searched: false,
        loading: false
      })
    }
  }

  getResults(search) {
    // We are loading and searching
    this.setState({ searched: true, query: search })

    // Let's change the %s into the search param of our REST URL.
    let url  = WP.restSearchPosts.replace( '%s', search )

    let json = fetch(url)
    .then(response => {
      return response.json()
    })
    .then(results => {
      this.setState({
        results: results,
        loading:false
      })
    }) // We got the results, we are not loading anymore
  }

  activateSearch() {
    console.log('activate');
    this.setState({
      active: true,
    })
    $('body').addClass('search-active')
    setTimeout(() => {
      this.searchInput.current.focus()
    }, 500)
  }

  deactivateSearch() {
    this.setState({
      active: false,
    })
    $('body').removeClass('search-active')
    this.searchInput.current.blur()
  }

  render() {
    return (
      <div id='search-wrapper' className='border-bottom' onMouseLeave={this.deactivateSearch}>
        <div id='search-trigger' className='text-align-center padding-top-micro padding-bottom-micro grid-row'>
          <div className="grid-item item-s-6 offset-s-3"><h3 id='search-title' onMouseUp={this.activateSearch} onTouchEnd={this.activateSearch}>{WP.lang === 'en_US' ? 'Search' : 'Buscar'}</h3></div>
          <div id='search-close' className='grid-item item-s-3 grid-row justify-end align-items-center' onTouchEnd={this.deactivateSearch}><div>&#10005;</div></div>
        </div>

        <div id='search-field' className='text-align-center'>
          <div>
            <input ref={this.searchInput} id='search-input' className='font-size-large text-align-center' type='text' onKeyUp={this.handleKeyUp} placeholder={WP.lang === 'en_US' ? 'Search' : 'Buscar'} autoComplete='off' autoCorrect='off' autoCapitalize='off' spellCheck='false' />
          </div>
          <SearchResults searched={this.state.searched} loading={this.state.loading} results={this.state.results} query={this.state.query}/>
        </div>
      </div>
    )
  }
}
