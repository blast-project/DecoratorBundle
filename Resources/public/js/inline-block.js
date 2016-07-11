if (LI === undefined)
    var LI = {};
if (LI.decorator === undefined)
    LI.decorator = [];

$(document).ready(function () {

    LI.decorator.inline();
    LI.decorator.endLine();
});

// display several sonata form fields on the same line
LI.decorator.inline = function () {

    $('.inline-block').each(function () {

        var width = LI.decorator.getWidget($(this)).attr('width');

        LI.decorator.getFormGroup($(this)).css({'display': 'inline-block', 'margin-right': '10px', 'width': width + '%'});
    });
};

// Add line breaks to inline-block fields
LI.decorator.endLine = function () {

    $('.new-line').each(function () {

        var width = LI.decorator.getWidget($(this)).attr('width');

        LI.decorator.getFormGroup($(this)).css({'width': width + '%'});
    });
};

//check if the field as one or two level form group parent
LI.decorator.getFormGroup = function (field) {

    var formGroup = field.closest('div.form-group').parent().closest('div.form-group');

    if (formGroup.length === 0) {

        formGroup = field.closest('div.form-group');
    }

    return formGroup;
};

//check what type of widget is being dealt with
LI.decorator.getWidget = function (field) {

    if (field.siblings('select') > 0) {

        return field.siblings('select');
    } else {
        
        return field;
    }
};