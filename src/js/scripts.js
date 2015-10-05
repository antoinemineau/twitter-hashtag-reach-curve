(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // form handler
    $('#twitter-reach-hashtag-form').submit(function(e) {
      e.preventDefault();
      var hashtag = $('#twitter-reach-hashtag-form-hashtag').val();
      $.getJSON('http://lab.antoinemineau.com:8124/?hashtag=' + hashtag, function(res) {
        console.log(res);
      }, function(jqXHR, textStatus, errorThrown) {
        console.log('error ' + textStatus + ' ' + errorThrown);
      });
    });
  });

})(jQuery, window, document);
