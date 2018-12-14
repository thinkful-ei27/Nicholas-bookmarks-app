'use strict';
/* global, index, api*/

const store = (function(){
  const items =[{title: 'MarkBook', url:'www.google.com', desc: 'This is a bookmark', rating: 3, id: '34509sdjsdfgike093245', expanded: true, edit: true},
    {title: 'Mark\'s Books', url: 'www.facebook.com', desc: 'cesspool', rating: 1, id: '435989ujdfnjk233r', expanded: true, edit: false}];
  let erasedAddFilterMark = false;
  let displayRating = 1;
  let sErr = '';

  function setDisplayRating(value){
    store.displayRating = value;
  }

  function filterStoreByRating(items){
    const result = items.filter(item => item.rating >= store.displayRating);
    return result;
  }

  return {
    items,
    erasedAddFilterMark,
    displayRating,
    setDisplayRating,
    filterStoreByRating,
    sErr
  };
}());