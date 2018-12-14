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
      success: callback
    });
    
  }

  return {
      createItem
  }
}());
