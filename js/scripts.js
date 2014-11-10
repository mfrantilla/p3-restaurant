$(document).ready( function() {
    var slider = $.fn.fsvs({
        speed : 500,
        bodyID : 'fsvs-body',
        selector : '> .slide',
        mouseSwipeDisance : 40,
        afterSlide : function(){},
        beforeSlide : function(){},
        endSlide : function(){},
        mouseWheelEvents : true,
        mouseWheelDelay : false,
        mouseDragEvents : true,
        touchEvents : true,
        arrowKeyEvents : true,
        pagination : true,
        nthClasses : false,
        detectHash : true
   
    });
   
    //slider.slideUp();
    //slider.slideDown();
    //slider.slideToIndex( index );

});