'use strict';
/* global, api, store.js */
const bookMarkList = (function(){
    const testResponse = 'I work';
    function generateBookMark(bookMarks){
        //should be able to handle edit and expanded formats
        return (`<div role = 'container' id = 'input later' class ='bookmark'>
        <h3>${bookMarks.title}</h3>
        <p role = 'rating'>${bookMarks.rating}</p>`
        + 
        (bookMarks.expanded ? 
        `<p>${bookMarks.desc}</p>
        <button href=${bookMarks.url}>(book)Mark URL</button>` : '') 
        + 
        `<button>Edit (book)Mark</button>
        <button>Delete (book)Mark</button>
      </div>`);
      }
    function render() {
        const bookMarks = store.items.map(bookMark => bookMarkList.generateBookMark(bookMark));
        $('body').append(bookMarks);
    };
    return {
        testResponse,
        generateBookMark,
        render
    };
}());

bookMarkList.render();

/*
function generateAddSortButtons(){

}
*/