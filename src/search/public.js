import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm';

class Search {

  constructor() {
    // Bind functions
    this.onReady = this.onReady.bind(this);

    $(document).ready(this.onReady);
  }

  onReady() {
    const searchField = $('#search-field');
    const searchFormElement = <SearchForm />;

    if (searchField.length) {
      console.log(searchField);
      ReactDOM.render(
        searchFormElement,
        searchField
      );
    }
  }
}

export default Search;
