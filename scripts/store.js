'use strict';
/* global, index, api*/

const store = (function(){
  const items =[{title: 'MarkBook', url:'www.google.com', desc: 'This is a bookmark', rating: 3, id: '34509sdjsdfgike093245', expanded: false, edit: true},
    {title: 'Mark\'s Books', url: 'www.facebook.com', desc: 'cesspool', rating: 1, id: '435989ujdfnjk233r', expanded: false, edit: true}];
  let erasedAddFilterMark = false;
  let displayRating = 1;
  let sErr = '';
  return {
    items,
    erasedAddFilterMark,
    displayRating,
    sErr
  };
}());