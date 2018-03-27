$(document).ready(function() {

   $.getJSON("https://talaikis.com/api/quotes/random", function(a) {
      $("#quote").append(a.quote);
      $("footer").append(a.author);
      $("#tweet-button").attr("href","https://twitter.com/intent/tweet?text=" + a.quote + "&hashtags=Quote4Life");
   });

   $(".more-quote").click(function () {
      $.getJSON("https://talaikis.com/api/quotes/random/", function(a) {
         $("#tweet-button").attr("href","https://twitter.com/intent/tweet?text=" + a.quote + "&hashtags=Quote4Life");
         $("#quote").text(a.quote);
         $("footer").text(a.author);
      });
   });

});
