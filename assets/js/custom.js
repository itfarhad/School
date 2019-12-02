$('.newstricker').smarticker({
    controllerType: 2,
    theme: 3,
    title: 'News Reader Title Section',
    speed: 1000,
    pausetime: 5000,
    shuffle: false,
});

/*
Author : Azhar Hussain Masum
Email: azharhussain4647@gmail.com
Website: http://azharmasum.com/
Facebook: https://www.facebook.com/azhar.hussainmasum
*/
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Camera Slide-Show Custom Js Here.
$(function () {
    $('.camera_wrap').camera({
        playPause: false,
        navigation: true,
        navigationHover: true,
        hover: true,
        loader: 'bar',
        loaderColor: 'lime',
        loaderBgColor: '#222222',
        loaderOpacity: 0.6,
        loaderPadding: 0,
        time: 4500,
        transPeriod: 1500,
        pauseOnClick: false,
        pagination: false
    });
});



$(function () {
    $('#notice').easyTicker({
        direction: 'up', // up or down
        easing: 'easeInOutBack', // easing options
        speed: 'slow', // animation speed
        interval: 3000,
        height: 'auto',
        visible: 6, // change the number of default visible elements.
        mousePause: 0, // pause on hover
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        }
    });
});

$(document).ready(function(){


    $(".readMore").click(function(){
    var This=$(this);    
    $(this).next().toggle(function(){
        if(This.text()=="Read"){
          This.text("Hide") 
        }
        else{
            This.text("Read") 
        }
    })
    });})