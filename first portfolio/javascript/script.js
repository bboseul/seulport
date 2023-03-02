$(function(){

    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('#hd').addClass('active');
        }else{
            $('#hd').removeClass('active');
        }
    });

    $(window).on('load', function () {
setFlowBanner();  
})

function setFlowBanner(){
const $wrap = $('.flow_banner');
const $list = $('.flow_banner .list');
let wrapWidth = $wrap.width();
let listWidth = $list.width();
const speed = 200; //1초에 몇픽셀 이동


let $clone = $list.clone();
$wrap.append($clone);
flowBannerAct()


function flowBannerAct() {
    if (listWidth < wrapWidth) {
        const listCount = Math.ceil(wrapWidth * 2 / listWidth);
        for (let i = 2; i < listCount; i++) {
            $clone = $clone.clone();
            $wrap.append($clone);
        }
    }
    $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
} 
}
setInterval(function(){
$('.slidewp>.img').delay(2500);
$('#slide1>ul').animate({marginLeft: "-1200px"})
$('#slide1>ul').delay(2500);
$('#slide1>ul').animate({marginLeft: "-2400px"})
$('#slide1>ul').delay(2500);
$('#slide1>ul').animate({marginLeft: "0px"})
});

$(document).ready(function(){

    $('.slider').bxSlider({
      minSlides:2,
      maxSlides:2,
      slideWidth:650,
      slideMargin:80
    });

  });

});