/*
    File Name : index.html
    Author Name : Benjamin Vanarragon
    Web Site : webdesign4.georgianc.on.ca/~200260440/AW/Portfolio
    Description : This contains all the javascript and jquery used for my site, including smooth scrolling, highlighting the nav-bar current section etc...
*/

/// <reference path="vendor/jquery.js" />


$(".wrapper").offset({ top: window.innerHeight });//offsets the wrapper class with all the info in it down by the height of the users window


//this function animates the scrolling to different id's on the page and subtracts the height of the top-bar
$(document).ready(function () {
    $(".jumper").on("click", function (e) { 
        e.preventDefault();

        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - $('ul.title-area').height()
        });
    });
    //this function makes the top bar either active or resets it to un-active depending on what section the user is at
    $("nav li").click(function () {
        $("nav li").removeClass("active");
        $(this).addClass("active");
    });
});

//this function calls the css function opacity and will fade out the class i pass it, in this case bigPicture gradually until it gets to 1024pixels.
$(window).scroll(function () {
    $(".bigPicture").css({
        'opacity': 1 - (($(this).scrollTop()) / 1024)
    });
});

