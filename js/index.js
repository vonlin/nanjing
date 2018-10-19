$(document).on('click','.button1',function(){
    $('.center').css('background','url(./images/center1.png) no-repeat')
}).on('click','.button2',function(){
    $('.center').css('background','url(./images/center2.png) no-repeat')
}).on('click','.title',function(){
    $('#home').fadeIn()
}).on('click','.button-to-index',function(){
    $('#home').fadeOut()
    $('.num').each(function(index,el){
        new CountUp(el,0.98*Number($(el).text().replace(/,+/g,'')),Number($(el).text().replace(/,+/g,'')),0,600).start()
    })
})

$('.num').each(function(index,el){
    new CountUp(el,0.98*Number($(el).text().replace(/,+/g,'')),Number($(el).text().replace(/,+/g,'')),0,600).start()
})