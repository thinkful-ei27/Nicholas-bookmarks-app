'use strict';
/* global, index, api */

const store = (function(){
  const items =[{title: 'MarkBook', url:'www.google.com', desc: 'This is a bookmark', rating: 3, expanded: true, edit: true},
    {title: 'Mark\'s Books', url: 'www.facebook.com', desc: 'cesspool', rating: 1, expanded: false, edit: false}];
  let erasedAddFilterMark = true;
  let displayRating = 1;
  let sErr = '';
  return {
    items,
    erasedAddFilterMark,
    displayRating,
    sErr
  };
}());