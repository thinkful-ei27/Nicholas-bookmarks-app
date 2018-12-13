'use strict';
/* global, api, store */
const bookMarkList = (function(){
    const testResponse = 'I work';
    function generateBookMark(bookMarks){
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

//generateBookMark will need to factor in expanded, maybe edit?
function generateBookMark(bookMarks){
  return ` <div role = 'container' id = 'input later' class ='bookmark'>
  <h3>${bookMarks.title}</h3>
  <p role = 'rating'>${bookMarks.rating}</p>
  <button>Edit (book)Mark</button>
  <button>Delete (book)Mark</button>
</div>`;
}

