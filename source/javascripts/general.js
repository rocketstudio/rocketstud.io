(function($){
  $(function(){

    var logo_src = $('#logo').data('logo');
    $.get(logo_src, null, function(data){
      var svg_node = $('svg', data);
      var doc_node = document.adoptNode(svg_node[0]);

      $('#logo').html(doc_node);
    }, 'xml');

    $('[data-type="background"]').each(function(){
      var $bgobj = $(this);

      $(window).scroll(function() {
          var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

          var coords = 'center '+ yPos + 'px';
          $bgobj.css({ backgroundPosition: coords });
      });
    });

    $('nav a').on('click', function(){
      var href = $(this).attr('href');
      $('nav a').removeClass('active');
      $(this).addClass('active');

      $('section[data-anchor=' + href + ']')
      .animatescroll({
        scrollSpeed:1000,
        easing:'easeInOutCubic'
      });
    });
  });
})(jQuery);
