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

      results = (
        <div className='padding-bottom-small grid-column justify-center flex-grow'>
          <div className='grid-item'>{WP.lang === 'en_US' ? 'Searching...' : 'Buscando...'}</div>
        </div>
      )

    } else if( this.props.results.length > 0 ) {
      // Results loaded and there are some of it.

      const queryResults = this.props.results.map( result => {
        return (
          <SearchResult key={result.id} result={result}/>
        ); // SearchResult is a new component.
      });

      const searchUrl = WP.lang === 'en_US' ? '/en/search/' + this.props.query : '/search/' + this.props.query

      results = (
        <div className='padding-bottom-small grid-column justify-around flex-grow'>
          <div className='grid-row justify-center'>{queryResults}</div>
          <div className='grid-item'><a href={searchUrl} className='link-underline'>View nore results</a></div>
        </div>
      )

    } else if ( this.props.searched ) {

      // Results loaded, but none found.
      results = (
        <div className='padding-bottom-small grid-column justify-center flex-grow'>
          <div className='grid-item'>{WP.lang === 'en_US' ? 'Nothing found' : 'Nada encontrado'}</div>
        </div>
      )

    }

    return results
  }
}
