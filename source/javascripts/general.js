(function($){
  $(function(){

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
