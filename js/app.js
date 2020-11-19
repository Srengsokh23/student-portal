"use strict"

/* ----------------- Supporting Function -----------------  */

// Navigation control for all the pages
var navigationControl = function(PageToShow){
    // get the attribute of the page to show
    var pageAttribute = $(PageToShow).attr("href");


    $(".content-wrapper").hide(); // hide all the pages
    $(pageAttribute).show(); // show the selected 
}

// Update Information Choices

var showUpdateForm = function(clickedItem){

    // get the clicked item value
    var clickedItemValue = "." + $(clickedItem).val();
    console.log(clickedItemValue);

    // Hide Update Form
    $(".form-wrapper").hide();
    $(clickedItemValue).show();
}


// document ready section
$(document).ready(function(){

    /* ----------------- Basic Navigation -----------------  */
    
    // show the default page
    $(".update-input-page").show();

    // if the dashboard admin page is clicked
    $(".nav-link").click(function(){
        navigationControl(this);
    });
    
    // Show selected update form
    $("option").click(function(){
        showUpdateForm(this);
    });


});