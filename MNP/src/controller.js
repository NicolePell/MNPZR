$('#warriors img').on('click', function () {

var pick = $(this).data("pick");
var warrior = warriorsHash[pick]
var game = new Game

$("#result").html(game.winner(warrior, randomChoice(gameChoice)))

})

warriorsHash = {monkey : new Monkey, ninja: new Ninja, pirate: new Pirate}

var gameChoice = [new Monkey, new Ninja, new Pirate]

randomChoice = function(gameChoice) {
return gameChoice[Math.floor(Math.random()*gameChoice.length)];

}