/*  
    
    Author: Jamin Pottle    
    Date: 5.21.18

    file: main.js

*/

/* Main onload function */
window.onload = function() {
    /* Screen Dimensions */
    var screenHeight = screen.height;
    var screenWidth = screen.width;

    /* Browser Dimensions */
    $browserHeight = window.innerHeight;
    $browserWidth = window.innerWidth;

    console.log(screenHeight);
    console.log(screenWidth);

    console.log($browserHeight);
    console.log($browserWidth);
    $("#header").height($browserHeight);
    $("#nameDiv").height($browserHeight);
}

window.onresize = function() {
    /* Screen Dimensions */
    var screenHeight = screen.height;
    var screenWidth = screen.width;

    /* Browser Dimensions */
    $browserHeight = window.innerHeight;
    $browserWidth = window.innerWidth;

    console.log(screenHeight);
    console.log(screenWidth);

    console.log($browserHeight);
    console.log($browserWidth);

    $("#header").height($browserHeight);
    $("#nameDiv").height($browserHeight);
}