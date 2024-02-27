var audio = document.getElementById('audio');

$(document).ready(function () {
  audio.play();
});

$(document).ready(function () {
  $('.container')
    .mouseenter(function () {
      $('.card').stop().animate(
        {
          top: '-135px',
        },
        'slow'
      );
    })
    .mouseleave(function () {
      $('.card').stop().animate(
        {
          top: 0,
        },
        'slow'
      );
    });
});
