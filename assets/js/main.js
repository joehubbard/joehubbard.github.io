import $ from 'jquery'

$(document).ready(function($){

    $('.hamburger')
        .hover(
            function(element){
                $(this).addClass('hover');
            }, 
            function(element){
                $(this).removeClass('hover');
            })
        .click(
            function(){
                if( $(this).hasClass('open') ){
                    $(this).addClass('hover');
                }
                else{
                    $(this).removeClass('hover');
                }

                $(this).toggleClass('open');
                $('.body__wrapper').toggleClass('navActive');
                
            }
        );

    $('.bodydimmer')
        .click(
            function(){
                $('.hamburger').click();
            }
        );


});
