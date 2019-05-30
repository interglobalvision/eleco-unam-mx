import React from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.result
    console.log(item)
    return (
      <div className='search-result grid-item item-s-12 item-m-4 item-l-3 margin-top-basic'>
        <a href={item.link}>
          <div className='grid-row justify-around font-size-tiny margin-bottom-micro'>
            <div><span className='block-category'>{item.cat_name}</span></div>
            <div><span>Author</span></div>
          </div>
          <div className='font-size-zero'><img src={item.fimg_url} /></div>
          <h2 className='font-serif margin-top-micro font-size-mid'>{item.title.rendered}</h2>
          <div className='font-size-tiny margin-top-micro p-no-margin-bottom' dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}></div>
        </a>
      </div>
    )
  }
}
