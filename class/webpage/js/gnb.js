/**
 * Created by 321-09 on 2016-07-22.
 */

$(function(){

    $('.gnb-depth1-link').on('mouseenter',function(){
        $('.gnb-depth2').show();
        $('.gnb-bg').show();
    });

});

$(function(){

    $('.gnb-depth1-link').on('mouseleave',function(){
        $('.gnb-depth2').hide();
        $('.gnb-bg').hide();
    });

});
