var main=function() {
    if(navigator.userAgent.match(/Android/i)){
        alert("android");
    }
    else {
        alert("pc");
    }

    $('.icon-menu, img').click(function () {
        $(".menu").animate({
            left:"0px"},200);
        $('body').animate({
      left: '285px'
    }, 200);
    });
    $("#zatvori").click(function()  {
        $(".menu").animate({
            left:'-285px'
        },200);
        $('body').animate({
      left: '0px'
    }, 200);
    });
};
$(document).ready(main);
