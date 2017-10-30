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

   // Analytics END

   //   // When the user scrolls down 20px from the top of the document, show the button
   //   window.onscroll = function () {
   //       scrollFunction()
   //   };
   //
   //   function scrollFunction() {
   //       if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
   //           document.getElementById("myBtn").style.display = "block";
   //       } else {
   //           document.getElementById("myBtn").style.display = "none";
   //       }
   //   }
   //
   //   // When the user clicks on the button, scroll to the top of the document
   //   function topFunction() {
   //       document.body.scrollTop = 0; // For Chrome, Safari and Opera 
   //       document.documentElement.scrollTop = 0; // For IE and Firefox
   //   }