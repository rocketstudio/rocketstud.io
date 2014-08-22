(function($){
  $(function(){

    $('nav').onePageNav({
      changeHash: true,
      scrollChange: function(el){
        trackPageViewLink($('a', el));
      }
    });

    $('a.scroll-down').on('click', function(e){
      var offsetTop = $('#who-we-are').offset().top;
      $('html, body').animate({ scrollTop: offsetTop }, 750, 'swing');
      trackPageView('/who-we-are#scroll-down');
      e.preventDefault();
    });

    $('nav a').on('click', function(){
      trackPageViewLink($(this));
    });

    $('a.hire-us').on('click', function(){
      trackPageView('/hire-us');
    });

    var introObject = $('#logo')[0];
    var navObject = $('nav');
    var hasTimeout = true;
    $(window).on('scroll', function(){
      dataIntro = introObject.getBoundingClientRect();
      if(dataIntro.bottom < 3 && $(window).scrollTop() > 0){
        navObject.addClass('fixed');
        hasTimeout = false;
      }else{
        if(hasTimeout == false){
          hasTimeout = true;
          setTimeout(function(){
            navObject.removeClass('fixed');
          }, 500);
        }
      }
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
