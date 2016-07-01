// display several sonata form fields on the same line
$(document).ready(function(){
            
    $('.inline-block')
        .closest('div.form-group')
        .css({
            'display': 'inline-block',
            'margin-right': '10px'
        })
    ;
});