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
          <div className='grid-item'><span>{WP.lang === 'en_US' ? 'Searching...' : 'Buscando...'}</span></div>
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

      const viewMore = this.props.results.length > 3 ? <div className='grid-item'><a href={searchUrl} className='link-underline'>{WP.lang === 'en_US' ? 'View more results' : 'Ver más resultados'}</a></div> : '';

      results = (
        <div className='padding-bottom-small grid-column justify-between flex-grow'>
          <div className='grid-row justify-center'>{queryResults}</div>
          {viewMore}
        </div>
      )

    } else if ( this.props.searched ) {

      // Results loaded, but none found.
      results = (
        <div className='padding-bottom-small grid-column justify-center flex-grow'>
          <div className='grid-item'><span>{WP.lang === 'en_US' ? 'Nothing found' : 'Nada encontrado'}</span></div>
        </div>
      )

    }

    return results
  }
}
