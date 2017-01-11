
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

});



