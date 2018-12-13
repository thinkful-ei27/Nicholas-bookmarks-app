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
        return `<div role = 'container' id = ${bookMarks.id} class ='bookmark no-edit'>
        <h3>${bookMarks.title}</h3>
        <p role = 'rating'>${bookMarks.rating}</p>`
        + 
        (bookMarks.expanded ? 
        `<p>${bookMarks.desc}</p>
        <button href=${bookMarks.url}>(book)Mark URL</button>` : '') 
        + 
        `<button class = 'edit-button'>Edit (book)Mark</button>
        <button class = 'delete-button'>Delete (book)Mark</button>
      </div>`;
    }

    function bookMarkEditHTML(bookMarks){
        return `<div role = 'container' id = ${bookMarks.id} class ='bookmark edit'>
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
            console.log('Add Button Works and Responds');
        });
    }
    
    function handleEditButton() {
        $('.no-edit').on('click', '.edit-button', function(){
            event.preventDefault();
            console.log('edit button works and responds.');
        })
    };

    function handleDeleteButton(){
        $('.no-edit').on('click', '.delete-button', function(){
            event.preventDefault();
            console.log('delete button works and response.');
        })
    }

    function handleCancelButton(){
        $('.edit').on('click', '.cancel', function(){
            event.preventDefault();
            console.log('cancel button works and responds.');
        });
    }

    function handleSubmitButton(){
        $('.edit').on('click', '.submit', function(){
            event.preventDefault();
            console.log('submit button works and responds.');
        });
    }

    function listenerFunctionBinder(){
        handleAddButton();
        handleEditButton();
        handleDeleteButton();
        handleCancelButton();
        handleSubmitButton();
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
        listenerFunctionBinder,
        render
    };
}());

bookMarkList.render();
bookMarkList.listenerFunctionBinder();




