$(function() {
    var width=$('.slider-box').width();
    interval = 6000;

    $('.slider_item:last').clone().prependTo('.slider');
    $('.slider_item').eq(1).clone().appendTo('.slider');
    $('.slider').css('margin-left', -width);
    setInterval('animation()',interval);
});
function animation(){

    var margin = parseInt($('.slider').css('marginLeft'));
    width=$('.slider-box').width(),
        slidersAmount=$('.slider').children().length;
    if(margin!=(-width*(slidersAmount-1)))
    {
        margin=margin-width;
    }else{
        $('.slider').css('margin-left', -width);
        margin=-width*2;
    }
    $('.slider').animate({marginLeft:margin},1000);
};


const second = $('.seconds');
timerDecrement();

function timerDecrement() {
  setTimeout(function() {
    const newSecond = second.text() - 1;
    
    second.text(newSecond);
    
    if(newSecond > 0) {
        timerDecrement();
    } else {
        timerDecrement2();
    };
  }, 1000);
}

const minute = $('.minutes');

function timerDecrement2() {
  setTimeout(function() {
    const newMinute = minute.text() - 1;
    
    minute.text(newMinute);
    second.text(59);
    if(newMinute >= 0) {
        timerDecrement();
    } else {
        minute.text(0);
        second.text(0);
    }
  }, 1000);
}

line1 = $('#line1');
line2 = $('#line2'); 
line3 = $('#line3'); 
line4 = $('#line4'); 
line5 = $('#line5'); 
line6 = $('#line6');
div = $('#div');    
div1 = $('#div1');   
div2 = $('#div2');
div3 = $('#div3');
div4 = $('#div4');
div5 = $('#div5');
div6 = $('#div6');

var pos = div.position();
var pos1 = div1.position();
var pos2 = div2.position();
var pos3 = div3.position();
var pos4 = div4.position();
var pos5 = div5.position();
var pos6 = div6.position();

line1.attr('x1',pos.left).attr('y1',pos.top).attr('x2',pos1.left).attr('y2',pos1.top);
line2.attr('x1',pos.left).attr('y1',pos.top).attr('x2',pos2.left).attr('y2',pos2.top);
line3.attr('x1',pos.left).attr('y1',pos.top).attr('x2',pos3.left).attr('y2',pos3.top);
line4.attr('x1',pos.left).attr('y1',pos.top).attr('x2',pos4.left).attr('y2',pos4.top);
line5.attr('x1',pos.left).attr('y1',pos.top).attr('x2',pos5.left).attr('y2',pos5.top);
line6.attr('x1',pos.left).attr('y1',pos.top).attr('x2',pos6.left).attr('y2',pos6.top);

