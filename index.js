$(document).keyup(function (e) {
  switch (e.key) {
    case 'w':
      moveUp('knight');
      break;
    case 'a':
      moveLeft('knight');
      break;
    case 's':
      moveDown('knight');
      break;
    case 'd':
      moveRight('knight');
      break;
    case 'i':
      moveUp('dino');
      break;
    case 'j':
      moveLeft('dino');
      break;
    case 'k':
      moveDown('dino');
      break;
    case 'l':
      moveRight('dino');
      break;
    default:
      break;
  }
});

$('.knight-move-right').click(function () {
  moveRight('knight');
});

$('.knight-move-left').click(function () {
  moveLeft('knight');
});

$('.knight-move-up').click(function () {
  moveUp('knight');
});

$('.knight-move-down').click(function() {
  moveDown('knight');
});

$('.dino-move-right').click(function () {
  moveRight('dino');
});

$('.dino-move-left').click(function () {
  moveLeft('dino');
});

$('.dino-move-up').click(function () {
  moveUp('dino');
});

$('.dino-move-down').click(function () {
  moveDown('dino');
});

function moveUp(player) {
  
  var currentIndex = parseInt($('.' + player)[0].classList[2]);
  if (currentIndex > 8) {

    // $('.dino').fadeOut( 150, function() {
    //   // Animation complete.
    //   $('.dino').fadeIn(150, function() {
    //       $('.' + player).first().removeClass(player);
    //       $('.grid-container').children('.' + (currentIndex - 8)).addClass(player);
    //   });
    // });

    $('.' + player).first().removeClass(player);
    $('.grid-container').children('.' + (currentIndex - 8)).addClass(player);
  }
}
function moveDown(player) {
  var currentIndex = parseInt($('.' + player)[0].classList[2]);
     if (currentIndex < 57) {
      // $('.dino').fadeOut( 150, function() {
      //   // Animation complete.
      //   $('.dino').fadeIn(150, function() {
      //     $('.' + player).first().removeClass(player);
      //     $('.grid-container').children('.' + (currentIndex + 8)).addClass(player);
      //   });
      // });
      $('.' + player).first().removeClass(player);
      $('.grid-container').children('.' + (currentIndex + 8)).addClass(player);
    }
}
function moveLeft(player) {
  var currentIndex = parseInt($('.' + player)[0].classList[2]);
  currentIndex -= 1;
  if (currentIndex > 0){
    // $('.dino').fadeOut( 150, function() {
    //   // Animation complete.
    //   $('.dino').fadeIn(150, function() {
    //     $('.' + player).first().removeClass(player);
    //     $('.grid-container').children('.' + currentIndex).addClass(player);
    //   });
    // });

    $('.' + player).first().removeClass(player);
    $('.grid-container').children('.' + currentIndex).addClass(player);
  }
}
function moveRight(player) {
  var currentIndex = parseInt($('.' + player)[0].classList[2]);
  currentIndex += 1;
  if (currentIndex <= 64) {

    // $('.dino').fadeOut( 150, function() {
    //   // Animation complete.
    //   $('.dino').fadeIn(150, function() {
    //     $('.' + player).first().removeClass(player);
    //     $('.grid-container').children('.' + currentIndex).addClass(player);
    //   });
    // });

    $('.' + player).first().removeClass(player);
    $('.grid-container').children('.' + currentIndex).addClass(player);
  }
}

// Dynamically Create Grid or Table for Playing Field:
$(function() {
  console.log( 'Tested index.js!' );
  let colCount = 1;
  
  for (let column = 1; column <= 8; column++) {
    for (let row = 1; row <= 8; row++) {
      var tile = $('<div>').addClass('grid-tile row-' + column + ' ' + colCount);
      colCount += 1;
      $('.grid-container').append(tile);
    }
  }

  // Knight:
  $('.1').addClass('knight');
  
  // Dino:
  $('.2').addClass('dino');

});
