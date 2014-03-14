/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-header").fitVids();
        $(".post-content").fitVids();

        setTimeout(function() {
        	$(document.body).addClass('loaded');	
        }, 500);

    });

}(jQuery));