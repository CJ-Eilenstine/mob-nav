import * as Model from "../model/model.js"

function initURLListener() {
$(window).on('hashchange', Model.changeRoute);
Model.changeRoute();
}
    
$(document).ready(function () {
initURLListener();
});

// This is pure javascript example

// var mobileBtn = document.getElementById("hamburgler");
// console.log(mobileBtn);

// mobileBtn.addEventListener("click", toggleMenu)

// function toggleMenu() {
//     mobileBtn.classList.toggle("open");
// }

// This is pure Jquery example

$(".hamburgler").on("click", () => {
    $(".hamburgler").toggleClass("open");
    console.log("Hello");
});