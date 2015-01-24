window.onload = function(){


  document.addEventListener('keyup', updatePlayerPosition, false );


  var player1 = document.getElementById(player1_active);
  var player2 = document.getElementById(player2_active);

function updatePlayerPosition(event) {
  var key = event.keyCode;
  if (key === 80) {
    var first_player = document.querySelector("#player1_strip");
    var first_player_position = first_player.querySelector(".active");
    var last_position = table.querySelector('.active').previousSibling.innerHTML.style.display = 'none';
    var current_position = table.querySelector(".active");
    current_position.className = ''
    current_position.nextElementSibling.className = ".active";
    var next_position = current_position.nextElementSibling.innerHTML;
    var next_position = table.querySelector(".active+td");
  }
  if (key === 81) {
   var table2 = document.getElementById("player2_strip");
    var current_position2 = table2.querySelector(".active");
    var next_position2 = current_position2.nextElementSibling;
    var next_position = table.querySelector(".active+td");
  }
  if

  }
  var table = document.getElementById("player"+playerNumber+"_strip");
  var current_position = table.querySelector(".active");
p
function doKeyUp(e){
  if (e.keycode == 80) {
    player1.current_position++;
  }
  if (e.keycode === 81) {
    player2.current_position++;
  }
};

function
 for(i=0; i<= player1_cells.length ; i++) {
  if (player1.)
}

  player1.addEventListener('keyup',)


updatePlayerPosition('player1', 10);

// iterate through board
// find players current position index
// delete it from that postion

// add event listener that moves player to given position on c
// click and deletes it from current position