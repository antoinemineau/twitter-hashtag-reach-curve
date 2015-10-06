(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // form handler
    $('#form').submit(function(e) {
      e.preventDefault();
      console.log('cc');
      $('#form-container').removeClass('bounceIn visibility-visible').addClass('bounceOut');
      $('#result').removeClass('bounceOut visibility-hidden').addClass('bounceIn visibility-visible');
      $('.path').attr('d', 'M0,30 L20,70 L40,50 L60,12 L80,90 L100,34');
      var pathLength = document.querySelector('.path').getTotalLength();
      console.log(pathLength);
      $('.path').css({
        'stroke-dasharray': pathLength,
        'stroke-dashoffset': pathLength
      });
      $('.path').animate({strokeDashoffset: 0}, 10000);
      /*var hashtag = $('#twitter-reach-hashtag-form-hashtag').val();
       var nodeHost = (window.location.hostname === 'localhost') ?
       'http://localhost:8124' :
       'http://lab.antoinemineau.com:8124';
       $.getJSON(nodeHost + '/?hashtag=' + hashtag, function(res) {
       console.log(res);*/
     /* }, function(jqXHR, textStatus, errorThrown) {
        console.log('error ' + textStatus + ' ' + errorThrown);
      });*/
    });

    $('#form-retry').click(function() {
      $('#result').removeClass('bounceIn visibility-visible').addClass('bounceOut').delay(1000).addClass('visibility-hidden');
      $('#form-container').removeClass('bounceOut visibility-hidden').addClass('bounceIn visibility-visible');
    });


  });

})(jQuery, window, document);
