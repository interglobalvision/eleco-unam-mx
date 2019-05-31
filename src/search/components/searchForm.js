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
    }

    this.getResults = this.getResults.bind(this)
    this.handleTriggerClick = this.handleTriggerClick.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    this.searchInput = React.createRef();
  }

  getResults(e) {
    if( this.state.loading ) {
      return
    }

    // Get the input value
    const search = e.target.value

    // At least 3 letters
    if( search && search.length > 2 ) {

      // We are loading and searching
      this.setState({ loading: true, searched: true })

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
    } else {
      // No input, so we are not searching.
      this.setState({
        results: [],
        searched: false
      })
    }
  }

  handleTriggerClick() {
    if (!this.state.active) {
      this.setState({
        active: true,
      })
    }
    setTimeout(() => {
      this.searchInput.current.focus()
    }, 500)
  }

  handleMouseLeave() {
    this.setState({
      active: false,
    })
  }

  render() {
    const wrapperClasses = this.state.active ? 'border-bottom active' : 'border-bottom';
    console.log('rerender')
    return (
      <div id='search-wrapper' className={wrapperClasses} onMouseLeave={this.handleMouseLeave}>
        <div id='search-trigger'
          className='text-align-center padding-top-micro padding-bottom-micro' onClick={this.handleTriggerClick}>
          <h3>{WP.lang === 'en_US' ? 'Search' : 'Buscar'}</h3>
        </div>

        <div id='search-field' className='text-align-center'>
          <div>
            <input ref={this.searchInput} id='search-input' className='font-size-large text-align-center' type='text' onKeyUp={this.getResults} />
          </div>
          <div className='padding-bottom-small'>
            <SearchResults searched={this.state.searched} loading={this.state.loading} results={this.state.results}/>
          </div>
        </div>
      </div>
    )
  }
}
