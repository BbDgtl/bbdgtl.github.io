   // ********** ////////// Add Google Analytics ////////// ********** //
   (function (i, s, o, g, r, a, m) {
       i['GoogleAnalyticsObject'] = r;
       i[r] = i[r] || function () {
           (i[r].q = i[r].q || []).push(arguments)
       }, i[r].l = 1 * new Date();
       a = s.createElement(o),
           m = s.getElementsByTagName(o)[0];
       a.async = 1;
       a.src = g;
       m.parentNode.insertBefore(a, m)
   })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

   ga('create', 'UA-105438021-1', 'auto');
   ga('send', 'pageview');


   jQuery(document).ready(function () {
       var offset = 250;
       var duration = 300;
       jQuery(window).scroll(function () {
           if (jQuery(this).scrollTop() > offset) {
               jQuery('.back - to - top').fadeIn(duration);
           } else {
               jQuery('.back - to - top').fadeOut(duration);
           }
       });


       jQuery('.back - to - top').click(function (event) {
           event.preventDefault();
           jQuery('html, body').animate({
               scrollTop: 0
           }, duration);
           return false;
       })
   });