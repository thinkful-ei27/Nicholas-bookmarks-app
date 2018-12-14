'use strict';
const api =(function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nicknotj';
  
  function createItem(obj, callback){
    const newItem = JSON.stringify(obj);
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: console.log('createItem posted to the survey')
    });
  }
  function deleteItem(id, callback){
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback
    });
  }

  function getItems(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  }



  return {
      createItem,
      deleteItem,
      getItems
  };
}());
