var pop = Popcorn.vimeo( "#vimeo", "http://vimeo.com/18359846" );

    pop.code({
        start: 1,
        end: 15,
        onStart: function( options ){
          $(document.getElementById('vimeotext')).toggleClass('animated__enter-left');
        },
        onEnd: function( options ){
          $(document.getElementById('vimeotext')).toggleClass('animated__heart-pulse');
      }
    });

// play video
pop.play();