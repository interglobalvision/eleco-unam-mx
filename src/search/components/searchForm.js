import React from 'react';
import SearchResults from './searchResults';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.getResults = this.getResults.bind(this);
    this.state = {
      results : [], // Results from search
      loading: false, // Are we still loading the previous results?
      searched: false // Are we actually even searching (any words in input)?
    };
  }

  getResults(e) {
    if( this.state.loading ) {
      return;
    }

    // Get the input value
    const search = e.target.value;

    // At least 3 letters
    if( search && search.length > 2 ) {

      // We are loading and searching
      this.setState({ loading: true, searched: true });

      // Let's change the %s into the search param of our REST URL.
      let url  = WP.restSearchPosts.replace( '%s', search );
      console.log(search);

      let json = fetch(url)
      .then(response => {
        return response.json()
      })
      .then(results => {
        console.log(results)
        this.setState({
          results: results,
          loading:false
        });
      }); // We got the results, we are not loading anymore
    } else {
      // No input, so we are not searching.
      this.setState({
        results: [],
        searched: false
      });
    }
  }

  render() {
    return (
     <div className="search-form-input">
       <input className="search-input" type="text" onKeyUp={this.getResults} />
       <SearchResults searched={this.state.searched} loading={this.state.loading} results={this.state.results}/>
     </div>
    )
  }
}
