function Game (player1, player2) {

    this.players = [player1, player2]

};

Game.prototype.winner = function(player1, player2) {

  if(player1.choice[0].beats === player2.choice[0].type)
      return 'player1'
  else if(player2.choice[0].beats === player1.choice[0].type) 
      return 'player2'
  else return 'draw'
    };


function Player () {
  this.choice = []
}

Player.prototype.chooses = function(warrior) {
    this.choice.push(warrior)
};

function Monkey () {
  this.type = 'monkey'
  this.beats = 'ninja'
};


function Ninja () {
  this.type = 'ninja'
  this.beats = 'pirate'
};

function Pirate () {
  this.type = 'pirate'
  this.beats = 'monkey'
};