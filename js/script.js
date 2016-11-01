// RANDOM QUOTE
(function(){
        document.addEventListener('DOMContentLoaded', function(){
            var children = document.getElementsByClassName('changing-quotes')[0].children;
            var length = children.length;
            var idx = Math.floor((Math.random() * children.length));;

            function changeQuote() {
               children[idx].className = "hidden";
               idx = (idx + 1) % length;
               children[idx].className = "visible";
               setTimeout(changeQuote, 10000);
            }
            changeQuote();
            
        });
    })();



// Remove the class 'active' from home and switch to Menu button
// TBD - called from html or by ajax func? see lecture 63 & continue.
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to blog button if not already there
  classes = document.querySelector("#navBlogButton").className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};



// ---------------------------------------------
// bootstrap navbar collapsing when losing focus
// ---------------------------------------------

$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});





// ---------------------------------------------
// ajax loading (preparation for SPA behaviour)
// ---------------------------------------------
(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS) (DISABLED - ALL AJAX, NO AJAX or SOMETHING IN THE MIDDLE??)
/*
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view (see coursera fullstack-course4 lecture 61+62 code to expand, based on menu categories & single category)
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});
*/


global.$dc = dc;

})(window);