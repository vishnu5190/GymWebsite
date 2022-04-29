// var myNav = document.getElementsByName('header1');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600 ) {
//         // myNav.classList.add("nav-colored");
//         // myNav.classList.remove("nav-transparent");
//         console.log(myNav)
//     } 
//     else {
//         // myNav.classList.add("nav-transparent");
//         // myNav.classList.remove("nav-colored");
//         console.log("down")
//     }
// };



$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
        //   $(".header1").css("background" , "blue");
        $(".header1").css({"background-color":"white"});
        // console.log("up");
        $(".logo_left p").css({"color":"black"});
        $(".ul1 li").css({"color":"black"});
        $(".shopbtn").css({"background-color":"black"});
        $(".shopbtn").css({"color":"white"});
        // $(".header1").css({" transition " : "0.5s ease-in-out"}); 
        
        // console.log("up");
        }
        
  
        else{
            $(".header1").css({"background-color" : "transparent"}); 
            // $(".header1").css({" transition " : "0.5s ease-in-out"}); 
            $(".logo_left p").css({"color":"white"});
            $(".ul1 li").css({"color":"white"}); 
            $(".shopbtn").css({"background-color":"white"});
            $(".shopbtn").css({"color":"black"});
            // console.log("down")
        }
    })
  })