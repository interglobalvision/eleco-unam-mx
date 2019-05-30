import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm';

const searchFormElement  = <SearchForm />;
const searchHolder = document.getElementById('search-holder');

if (searchHolder) {
  ReactDOM.render(
    searchFormElement,
    searchHolder
  );
} else {
  console.error('no search!');
  $('#search-holder').remove();
}
