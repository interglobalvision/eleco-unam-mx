import React from 'react';
import SearchResult from './searchResult';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = '';

    if( this.props.loading ) {
      // We are loading the results.

      results = <p>Loading</p>;

    } else if( this.props.results.length > 0 ) {
      // Results loaded and there are some of it.

      const _results = this.props.results.map( result => {
        return (
          <SearchResult key={result.id} result={result}/>
        ); // SearchResult is a new component.
      });

      results = <ul>{_results}</ul>;

    } else if ( this.props.searched ) {

      // Results loaded, but none found.
      results = <p>Nothing Found</p>;

    }

    return (
      <div>{results}</div>
    )
  }
}
