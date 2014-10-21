function Game() {

};

Game.prototype.winner = function(choice1, choice2) {
  if(choice1.beats === choice2.type) return 'You win!';
  if(choice2.beats === choice1.type) return 'Computer wins!';
  else return 'Draw'
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