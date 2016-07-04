// display several sonata form fields on the same line
$(document).ready(function(){
    
    $('.inline-block').each(function(){
        
        var formGroup = $(this).closest('div.form-group').parent().closest('div.form-group');
        var css = {'display': 'inline-block', 'margin-right': '10px'};
        
        if( formGroup.length === 0){
            $(this).closest('div.form-group').css(css);
        }else{
            formGroup.css(css);    
        }
    });
});