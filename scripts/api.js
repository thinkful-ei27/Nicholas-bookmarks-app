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
    });
  }

  function getItems(){
    /*$.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'GET'
    });*/
  }



  return {
      createItem,
      deleteItem,
      getItems
  }
}());
