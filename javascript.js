    $('.title').on('click', function(event) {
      $('.mobile-tooltip-1').toggle('show');
    });

    $('.title2').on('click', function(event) {
      $(".mobile-tooltip-2").css('display', 'block');
    });

    $('.close').on('click', function(event) {
      $(".mobile-tooltip-2").css('display', 'none');
    });