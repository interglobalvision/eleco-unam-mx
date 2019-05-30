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

      results = <div className='grid-item'>{WP.lang === 'en_US' ? 'Searching...' : 'Buscando...'}</div>;

    } else if( this.props.results.length > 0 ) {
      // Results loaded and there are some of it.

      const queryResults = this.props.results.map( result => {
        return (
          <SearchResult key={result.id} result={result}/>
        ); // SearchResult is a new component.
      });

      results = <div className='grid-row justify-center'>{queryResults}</div>;

    } else if ( this.props.searched ) {

      // Results loaded, but none found.
      results = <div className='grid-item'>Nothing Found</div>;

    }

    return (
      <div className='grid-row justify-center'>{results}</div>
    )
  }
}
