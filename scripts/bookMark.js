'use strict';
/* global $, api, store */
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
    function bookMarkHTML(bookMarks){
        return `<div role = 'container' id = 'input later' class ='bookmark'>
        <h3>${bookMarks.title}</h3>
        <p role = 'rating'>${bookMarks.rating}</p>`
        + 
        (bookMarks.expanded ? 
        `<p>${bookMarks.desc}</p>
        <button href=${bookMarks.url}>(book)Mark URL</button>` : '') 
        + 
        `<button>Edit (book)Mark</button>
        <button>Delete (book)Mark</button>
      </div>`;
    }

    function bookMarkEditHTML(bookMarks){
        return `<div role = 'container' id = 'input later' class ='bookmark edit'>
        <form id = "js-editMark">
            <h2>Edit your (book)Mark</h2>
            <label for = "name">${bookMarks.name}</label>
            <input type = "text" id="createName" name ="name">
            <label>Rating</label>
              <select>           
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option> 
              </select>
              <label  for = "description">Description</label>
              <input type = "text" id="createDescription" name="description">
              <label for ="URL"> URL:</label>
              <input type = "text" id="createURL" name="URL">
              <button class = "cancel">Cancel</button>
              <button class = "submit">Submit (book)Mark</button>
          </form>
    </div>` 
    }

    function generateBookMark(bookMarks){
        return bookMarks.edit ? bookMarkEditHTML(bookMarks) : bookMarkHTML(bookMarks);
      }

    function handleAddButton() {
        $('.add-rating').on('click', 'button', function(){
            event.preventDefault();
            console.log('Add Button Works and Response');
        });
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
        handleAddButton,
        render
    };
}());

bookMarkList.render();
bookMarkList.handleAddButton();



