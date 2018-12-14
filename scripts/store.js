'use strict';
/* global, index, api*/

const store = (function(){
  const items =[{title: 'MarkBook', url:'www.google.com', desc: 'This is a bookmark', rating: 3, id: '34509sdjsdfgike093245', expanded: true, edit: true},
    {title: 'Mark\'s Books', url: 'www.facebook.com', desc: 'cesspool', rating: 1, id: '435989ujdfnjk233r', expanded: true, edit: false}];
  let eraseAddFilterMark = false;
  let addObject = false;
  let displayRating = 1;
  let sErr = '';

  function setDisplayRating(value){
    store.displayRating = value;
  }

  function filterStoreByRating(items){
    const result = items.filter(item => item.rating >= store.displayRating);
    return result;
  }

  function resetBookMarksEdit(){
      store.items.forEach(item => item.edit = false);
  }
  
  function setEraseAddFilterMarkTrue(){
      store.eraseAddFilterMark = true;
  }

  function resetAddObject(){
      store.addObject = !store.addObject;
  }

  function setStoreItems(item){
      store.items = item;
  }

  return {
    items,
    eraseAddFilterMark,
    displayRating,
    setDisplayRating,
    filterStoreByRating,
    sErr,
    addObject,
    resetBookMarksEdit,
    resetAddObject,
    setEraseAddFilterMarkTrue,
    setStoreItems
  };
}());