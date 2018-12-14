'use strict';
/* global $, api, store */
const bookMarkList = (function(){

  function generateAddSortButtons(){
    if(!store.eraseAddFilterMark){
      return `<div role ='container' class ='wide container add-rating'>
            <button class='add-button'>Add (book)Mark</button>
            <form>
                <label>Display Ratings At & Above:</label>
                <select id='filterRatingSelect' class='filterRatingSelect'>         
                    <option value="">Please select a rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option> 
                </select>
            </form>
        </div>`;
    } else return '';
  }
  //${store.displayRating === 1 ? 'selected' : ''} (Want to use this to have it pre-select the current value...)
  function bookMarkHTML(bookMarks){
    return `<div role ='container' id="${bookMarks.id}" class ='bookmark no-edit'>
        <h3>${bookMarks.title}</h3>
        <p role = 'rating'>${bookMarks.rating}</p>`
        + 
        (bookMarks.expanded ? 
          `<p>${bookMarks.desc}</p>
        <button><a href=${bookMarks.url}>(book)Mark URL</a></button>` : '') 
        + 
        `<button class = 'edit-button'>Edit (book)Mark</button>
        <button class = 'delete-button'>Delete (book)Mark</button>
      </div>`;
  }

  function bookMarkEditHTML(bookMarks){
    return `<div role='container' id="${bookMarks.id}" class='bookmark edit'>
        <form id="js-editMark">
            <h2>Edit your (book)Mark</h2>
            <label for="name">Title</label>
            <input type="text" id="createName" name ="name" value ="${bookMarks.title}">
            <label>Rating</label>
              <select>           
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option> 
              </select>
              <label  for="description">Description</label>
              <input type="text" id="createDescription" name="description">
              <label for="URL"> URL:</label>
              <input type="text" id="createURL" name="URL">
              <button class="cancel">Cancel</button>
              <button class="submit">Submit (book)Mark</button>
          </form>
    </div>`;
  }

  function bookMarkAddHTML(){
    if(store.addObject){
      store.resetBookMarksEdit();
      store.setEraseAddFilterMarkTrue();
      return `<div role = 'container' id = 'input later' class ='container createMark'>
          <form id = "js-createMark">
            <h2>Create a new Bookmark!</h2>
            <label for = "name">Name</label>
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
      </div>`;
    } else return '';
  }

  function generateBookMark(bookMarks){
    return bookMarks.edit ? bookMarkEditHTML(bookMarks) : bookMarkHTML(bookMarks);
  }

  function handleAddButton() {
    $('.master').on('click', '.add-button', function(){
      event.preventDefault();
      store.resetAddObject();
      render(store.items);
    });
  }
    
  function handleEditButton() {
    $('.master').on('click', '.edit-button', function(){
      event.preventDefault();
      console.log('edit button works and responds.');
    });
  }

  function handleDeleteButton(){
    $('.master').on('click', '.delete-button', function(){
      event.preventDefault();
      console.log('delete button works and response.');
    });
  }

  function handleCancelButton(){
    $('.master').on('click', '.cancel', function(){
      event.preventDefault();
      console.log('cancel button works and responds.');
    });
  }

  //consider changing to submit
  function handleSubmitButton(){
    $('.master').on('click', '.submit', function(){
      event.preventDefault();
      console.log('submit button works and responds.');
    });
  }

  //next in line is listening for a change in the filter

  //listen on change events
  function handleFilterRating(){
    $('.master').on('change', '.filterRatingSelect', function(){
      event.preventDefault();
      store.setDisplayRating($('.filterRatingSelect').val());
      render(store.filterStoreByRating(store.items));
    });
  }

  function listenerFunctionBinder(){
    handleAddButton();
    handleEditButton();
    handleDeleteButton();
    handleCancelButton();
    handleSubmitButton();
    handleFilterRating();
  }
  function render(bookMarks) {
    const addItem = bookMarkAddHTML();
    const addFilter = generateAddSortButtons();
    const displayedItems = bookMarks.map(bookMark => bookMarkList.generateBookMark(bookMark));
    const totalDisplayed = addItem + addFilter + displayedItems;
    $('.master').html(totalDisplayed);
  }
  return {
    generateBookMark,
    generateAddSortButtons,
    listenerFunctionBinder,
    render
  };
}());

bookMarkList.render(store.items);
bookMarkList.listenerFunctionBinder();




