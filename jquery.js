$(document).ready(function() {

   $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes/", function(a) {
      // console.log(a[0].quote); just for testing
      $("#quote").append(a[0].quote);
      $("footer").append(a[0].character);
      $("#tweet-button").attr("href","https://twitter.com/intent/tweet?text=" + a[0].quote + "&hashtags=Quote4Life");
   });


   $(".more-quote").click(function () {
      $.getJSON("https://thesimpsonsquoteapi.glitch.me/quotes/", function(a) {
         // console.log(a[0].quote); just for testing
         $("#tweet-button").attr("href","https://twitter.com/intent/tweet?text=" + a[0].quote + "&hashtags=Quote4Life");
         $("#quote").text(a[0].quote);
         $("footer").text(a[0].character);
      });
   });

});
