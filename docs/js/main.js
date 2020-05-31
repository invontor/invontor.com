(function ($) {

    "use strict";

    jQuery(document).ready(function () {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */

        var themeWindow = $(window);
        var pagebody = $('html, body');

        themeWindow.on("load", function () {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(50).fadeOut('slow');
            themeWindow.scrollTop(0);
        });


        /*
        * -----------------------------------------------------------------
        *-----------------------------Typed Js-----------------------------
        * -----------------------------------------------------------------
        */


        var typed = new Typed("#typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 1000,
            loop: true

        });


    });

})(jQuery);