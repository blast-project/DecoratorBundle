
if (LI === undefined)
    var LI = {};
if (LI.decorator === undefined)
    LI.decorator = [];

$(document).ready(function () {

    LI.decorator.inline();
    LI.decorator.newLine();
});

// display several sonata form fields on the same line
LI.decorator.inline = function () {

    $('.inline-block').each(function () {

        var widget = LI.decorator.getWidget($(this));
        var width = widget.attr('width');
        var height = widget.attr('height');

        LI.decorator.getFormGroup($(this)).css({
            'display': 'inline-block',
            'margin-right': '10px',
            'width': width + '%',
            'height': height + 'px'
        });

        $(this).css('height', height + 'px');
    });
};

// Add line breaks to inline-block fields
LI.decorator.newLine = function () {

    $('.new-line').each(function () {

        var widget = LI.decorator.getWidget($(this));
        var width = widget.attr('width');
        var height = widget.attr('height');

        LI.decorator.getFormGroup($(this)).css({
            'width': width + '%',
            'height': height + 'px'
        });

        $(this).css('height', height + 'px');
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