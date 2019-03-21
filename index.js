document.body.addEventListener("keyup", function(e) {
  switch (e.key) {
    case "w":
      moveUp("knight");
      break;

    case "a":
      moveLeft("knight");
      break;

    case "s":
      moveDown("knight");
    break;

    case "d":
      moveRight("knight");
      break;

    case "i":
      moveUp("dino");
      break;

    case "j":
      moveLeft("dino");
      break;

    case "k":
      moveDown("dino");
      break;

    case "l":
      moveRight("dino");
      break;

    default:
      break;
  }
});

document.getElementsByClassName("knight-move-right")[0].addEventListener('click',function(e){
  knight = document.getElementsByClassName('knight');
});

document.getElementsByClassName("knight-move-left")[0].addEventListener('click',function(e){
  knight = document.getElementsByClassName('knight');
});

document.getElementsByClassName("knight-move-up")[0].addEventListener('click',function(e){
  knight = document.getElementsByClassName('knight');

});

document.getElementsByClassName("knight-move-down")[0].addEventListener('click',function(e){
  knight = document.getElementsByClassName('knight');

});

document.getElementsByClassName("dino-move-right")[0].addEventListener('click',function(e){
  dino = document.getElementsByClassName("dino");
});
document.getElementsByClassName("dino-move-left")[0].addEventListener('click',function(e){
  dino = document.getElementsByClassName("dino");

});
document.getElementsByClassName("dino-move-up")[0].addEventListener('click',function(e){
  dino = document.getElementsByClassName("dino");
});
document.getElementsByClassName("dino-move-down")[0].addEventListener('click',function(e){
  dino = document.getElementsByClassName("dino");
});

function moveUp(player) {
  var currentIndex = parseInt(document.getElementsByClassName(player)[0].classList[0]);
  if (currentIndex > 8) {
    document.getElementsByClassName(player)[0].classList.remove(player);
    document.getElementsByClassName(currentIndex - 8)[0].classList.add(player);
  }
}
function moveDown(player) {
  var currentIndex = parseInt(document.getElementsByClassName(player)[0].classList[0]);
    if (currentIndex < 57) {
      document.getElementsByClassName(player)[0].classList.remove(player);
      document.getElementsByClassName(currentIndex + 8)[0].classList.add(player);
    }
}
function moveLeft(player) {
  var currentIndex = parseInt(document.getElementsByClassName(player)[0].classList[0]);
  currentIndex -= 1;
  if (currentIndex > 0){
    document.getElementsByClassName(player)[0].classList.remove(player);
    document.getElementsByClassName(currentIndex)[0].classList.add(player);
  }
}
function moveRight(player) {
  var currentIndex = parseInt(document.getElementsByClassName(player)[0].classList[0]);
  currentIndex += 1;
  if (currentIndex <= 64) {
    document.getElementsByClassName(player)[0].classList.remove(player);
    document.getElementsByClassName(currentIndex)[0].classList.add(player);
  }
}