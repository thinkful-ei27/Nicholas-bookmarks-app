'use strict';
/* global, api, store.js */
const bookMarkList = (function(){
    function generateAddSortButtons(){
        if(!store.erasedAddFilterMark){
            return `<div role = 'container' class = 'wide container add-rating'>
            <button>Add (book)Mark</button>
            <form>
                <label>Display Ratings Above:</label>
                <select>           
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option> 
                </select>
            </form>
        </div>`;
        }
      }
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
        const addFilter = generateAddSortButtons();
        const bookMarks = store.items.map(bookMark => bookMarkList.generateBookMark(bookMark));
        $('body').append(addFilter);
        $('body').append(bookMarks);
    };
    return {
        generateBookMark,
        generateAddSortButtons,
        render
    };
}());

bookMarkList.render();



