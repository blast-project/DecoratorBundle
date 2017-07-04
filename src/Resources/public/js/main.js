
$(document).ready(function(){

    //destroy the waypoint added by sonata
    Waypoint.destroyAll();

    var navBar = $('section.content-header');
    var tabs = $('ul.nav-tabs[role="tablist"]');

    //Remove navbar class so that sonata won't attach its waypoint
    $('nav.navbar').removeClass('navbar');

    //Moved the tabs to sticky container
    tabs.remove()
        .appendTo($('#fixed-tabs'))
    ;

    //Scroll to top when changing tabs
    $('a[data-toggle="tab"]').click(function(){
        window.scrollTo(0,0);
    });

    new Waypoint.Sticky({
        element: navBar[0],
        offset:  30,
        handler: function( direction ) {
            if (direction == 'up') {
                navBar.find('nav').width('auto');
                $('section.content-header').width('auto');
            } else {
                navBar.find('nav').width($('.content-wrapper').outerWidth());
                $('section.content-header').width($('section.content .nav-tabs-custom').outerWidth());
            }
        }
    });

    $(document).on('click','a.openInModal',function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        var url = $(this).attr('href');
        var modal = $('.li-modal.modal');
        var modalBody = modal.find('.modal-body');

        $.get(url,function(html) {
            modalBody.html(html);
            modalBody.find('.form-actions').append(
                modal.find('.modal-footer button').clone()
            );

            modal.find('.modal-footer').hide();
            modal.modal('show');

            var modalSelects = modalBody.find('select');

            if(modalSelects.length > 0) {
                $.each(modalSelects,function(i,item) {
                    if($(item).closest('.sonata-ba-field').find('.select2-container').length == 0) {
                        $(item).select2({
                            minimumResultsForSearch: -1
                        });
                    }
                });
            }
        });
    });

});
