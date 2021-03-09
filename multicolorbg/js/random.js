  (function($){
    $(function() {
      $("#random-wall").randomwall({
        // set random image pool manually (optional)
        delay_time: 3000,
        image_list: ['http://i.imgur.com/CiAvVQL.jpg',
                     'http://i.imgur.com/qC5Nprs.jpg',
                     'http://i.imgur.com/fckzvp1.jpg',
                     'http://i.imgur.com/od4QZ8C.jpg'],
      });
    });
  }(jQuery));