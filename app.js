// const header = require('./wong-header.js');
// console.log(header.display('Devan', 'Wong', 'Personal Portfolio'));
/*
============================================
; Title: Personal Portfolio
; Author: Devan Wong
; Date:  7 Sept 2020
; Description: JS FILE
;===========================================
*/
// https://www.w3schools.com/howto/howto_css_modal_images.asp
$(document).ready(function() {
    //create references to the modal
    var modal = document.getElementById("myModal");
    //to all images
    var images = document.getElementsByClassName("myImages");
    //the image in the modal
    var modalImg = document.getElementById("img01");
    //and the caption in the modal
    var captionText = document.getElementById("caption");

    //for loop to be able to make more than one image able to expand.
    for (var i = 0; i < images.length; i++){
        var img = images[i];
        img.onclick = function(evt){
            console.log(evt);
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }

    console.log( "ready!" );
});

// console.log("this is being read");