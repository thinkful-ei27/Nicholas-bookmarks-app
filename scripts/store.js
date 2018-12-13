'use strict';
/* global, index, api */

const store = (function(){
  const items =[{title: 'MarkBook', url:'www.google.com', desc: 'This is a bookmark', rating: 3, expanded: true, edit: false},
    {title: 'Mark\'s Books', url: 'www.facebook.com', desc: 'cesspool', rating: 1, expanded: true, edit: false}];
  let addMark = false;
  let displayRating = 1;
  let sErr = '';
  return {
    items,
    addMark,
    displayRating,
    sErr
  };
}());