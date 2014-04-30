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

    $('nav').onePageNav({
      changeHash: true,
      scrollChange: function(el){
        trackPageViewLink($('a', el));
      }
    });

    $('nav a').on('click', function(){
      trackPageViewLink($(this));
    });

    $('a.hire-us').on('click', function(){
      trackPageView('/hire-us');
    });

    var trackPageViewLink = function(a){
      var page = a.attr('href').replace('#', '/');
      trackPageView(page);
    }

    var trackPageView = function(url){
      ga('send', 'pageview', url);
    }

  });
})(jQuery);
