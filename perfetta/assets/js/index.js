/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
		// add class loaded used for animation
        setTimeout(function() {
        	$(document.body).addClass('loaded');	
        }, 500);
        // move main image to header
        if($('#post-page').length > 0) {
        	var featured_image = $('img[alt="featured-image"]');
        	var featured_video = $('.post-content iframe:first-child')
        	// check if the featured image exists
        	if(featured_image && featured_image.length > 0) {
        		// create container for the image
        		$('.post-header h2').before(featured_image);
        	} else if(featured_video && featured_video.length > 0) {
        		$('.post-header h2').before(featured_video);
        	}
        }
        // fit videos
        $(".post-header").fitVids();
        $(".post-content").fitVids();
    });
}(jQuery));