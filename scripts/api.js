'use strict';
const api =(function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nicknotj';
  
  function createItem(obj, callback, eCallback){
    const newItem = JSON.stringify(obj);
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: eCallback
    });
  }
  function deleteItem(id, callback, eCallback){
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback,
      error: eCallback
    });
  }

  function getItems(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  }
  /*
  function patchItems(id, obj, callback){
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      success: callback
    });
  }
*/

  return {
    createItem,
    deleteItem,
    getItems
  };
}());
