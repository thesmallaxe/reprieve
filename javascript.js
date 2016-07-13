    $('.title').on('click', function(event) {
      $('.popup').toggle('show');
    });

    $('.title2').on('click', function(event) {
      $(".popup2").css('display', 'block');
    });

    $('.close').on('click', function(event) {
      $(".popup2").css('display', 'none');
    });