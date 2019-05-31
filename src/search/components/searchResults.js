import React from 'react'
import SearchResult from './searchResult'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let results = ''

    if( this.props.loading ) {
      // We are loading the results.

      results = (
        <div className='search-message-holder padding-bottom-small grid-column flex-grow padding-top-small padding-bottom-small'>
          <div className='grid-item font-size-mid'><span>{WP.lang === 'en_US' ? 'Searching' : 'Buscando'}</span><span className="ellipse"><span> .</span><span> .</span><span> .</span></span></div>
        </div>
      )

    } else if( this.props.results.length > 0 ) {
      // Results loaded and there are some of it.

      const queryResults = this.props.results.map( (result, index) => {
        if (index < 3) {
          return (
            <SearchResult key={result.id} result={result}/>
          ); // SearchResult is a new component.
        }
        return
      });

      const searchUrl = WP.lang === 'en_US' ? '/en/search/' + this.props.query : '/search/' + this.props.query

      const viewMore = this.props.results.length > 3 ? <div className='grid-item padding-top-basic padding-bottom-small'><a href={searchUrl} className='link-underline padding-top-small padding-bottom-small font-size-mid'>{WP.lang === 'en_US' ? 'View more results' : 'Ver más resultados'}</a></div> : '';

      results = (
        <div className='padding-bottom-small grid-column justify-between flex-grow'>
          <div className='grid-row justify-center'>{queryResults}</div>
          {viewMore}
        </div>
      )

    } else if ( this.props.searched ) {

      // Results loaded, but none found.
      results = (
        <div className='search-message-holder padding-bottom-small grid-column flex-grow padding-top-small padding-bottom-small'>
          <div className='grid-item font-size-mid'><span>{WP.lang === 'en_US' ? 'Nothing found' : 'Nada encontrado'}</span></div>
        </div>
      )

    }

    return results
  }
}
