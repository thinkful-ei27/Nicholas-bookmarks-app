'use strict';
/* global, index, api*/

/*title: 'MarkBook', url:'www.google.com', desc: 'This is a bookmark', rating: 3, id: '34509sdjsdfgike093245', expanded: true, edit: true},
{title: 'Mark\'s Books', url: 'www.facebook.com', desc: 'cesspool', rating: 1, id: '435989ujdfnjk233r', expanded: true, edit: false}*/

const store = (function(){
  const items =[];
  let eraseAddFilterMark = false;
  let addObject = false;
  let displayRating = 1;
  let sErr = '';

  function deleteById(itemId){
    let currentIndex = store.items.findIndex(function(element){
      return element.id === itemId;
    });
    store.items.splice(currentIndex, 1);
  }

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

  function addValuesToNewItem(newItem){
    newItem['expanded'] = false;
    newItem['edit'] = false;
    return newItem;
  }

  function addNewItemToStore(newItem){
    store.items.push(newItem);
  }

  function setEraseAddFilterMarkFalse(){
      store.eraseAddFilterMark = false;
  }

  function setAddObjectFalse(){
      store.addObject = false;
  }

  function setAddObjectTrue(){
      store.addObject = true;
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
    setAddObjectFalse,
    setEraseAddFilterMarkTrue,
    setStoreItems,
    setAddObjectTrue,
    setEraseAddFilterMarkFalse,
    deleteById,
    addValuesToNewItem,
    addNewItemToStore
  };
}());