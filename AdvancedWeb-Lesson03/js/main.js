﻿/*
    File Name : index.html
    Author Name : Benjamin Vanarragon
    Web Site : webdesign4.georgianc.on.ca/~200260440/AW/Portfolio
    Description : This contains all the javascript and jquery used for my site, including smooth scrolling, highlighting the nav-bar current section etc...
*/

/// <reference path="vendor/jquery.js" />


$(".wrapper").offset({ top: window.innerHeight });

$(document).ready(function () {
    $(".jumper").on("click", function (e) {
        e.preventDefault();

        $("body, html").animate({
            scrollTop: $($(this).attr('href')).offset().top - $('.top-bar-section').height()
        });
    });
});