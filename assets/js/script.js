(function() {

  var width = 0;
  function windowsSize() {return $(window).width();}

  $(document).ready(function(){width = windowsSize();});
  $(window).resize(function() {
    //When page resize show the menue if is not responsive design
    width = windowsSize();
    if(width > 320) {
      $('#nav-mozilla-menu').css('display', 'inherit');
    } else {
      $('#nav-mozilla-menu').css('display', 'none');
    }
  });


  //Reduce the header when the page is scrolled
  $(document).scroll(function() {

    if(width > 320) {
      $('.nav-mozilla').addClass('mozilla-container-after');
      $('.mozilla_container .logo a').addClass('logo-after');
      $('header').css({'height': '1.0em', 'padding': '0.5em'});
      var height = $(this).scrollTop();
      if(height == 0) {
        $('.nav-mozilla').removeClass('mozilla-container-after');
        $('.mozilla_container .logo a').removeClass('logo-after');
        $('header').css({'height': '2.5em', 'padding': '0.5em 0em'});
      }
    }

  });

  //Toggle menu when is responsive desing
  $('.toggle').click(function() {

    if(width <= 320) {
      $('.nav-mozilla-menu').toggle('fast', 'swing', function() {
      });
    }

  });

  //Only hide the menu when is reponsive design
  $('.nav-mozilla-menu li a').click(function(e) {
    if(width <= 320) {
      $(this).closest('ul').css('display', 'none');
    } else {
      $(this).closest('ul').css('display', 'inherit');
    }
  });

})();
