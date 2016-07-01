// display several sonata form inputs on the same line
$(document).ready(function(){
            
    $('input.inline-block, div.inline-block')
        .parent()
        .parent()
        .css('display', 'inline-block')
    ;
    $('div.inline-block')
        .parent()
        .parent()
        .parent()
        .parent()
        .css('display', 'inline-block')
    ;
});