'use strict';
/* global, api, store.js */
const bookMarkList = (function(){
    const testResponse = 'I work';
    function generateBookMark(bookMarks){
        //should be able to handle edit and expanded formats
        return ` <div role = 'container' id = 'input later' class ='bookmark'>
        <h3>${bookMarks.title}</h3>
        <p role = 'rating'>${bookMarks.rating}</p>
        <button>Edit (book)Mark</button>
        <button>Delete (book)Mark</button>
      </div>`;
      }
    return {
        testResponse,
        generateBookMark
    };
}());

function render() {
    const bookMarks = store.items.map(bookMark => bookMarkList.generateBookMark(bookMark));
    $('body').append(bookMarks);
}

render();