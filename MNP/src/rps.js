function Game() {

};

Game.prototype.winner = function(choice1, choice2) {
  if(choice1.beats === choice2.type || choice1.alsoBeats === choice2.type) return 'You win!';
  if(choice2.beats === choice1.type || choice2.alsoBeats === choice1.type) return 'Computer wins!';
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
  this.alsoBeats = 'robot'
};


function Ninja () {
  this.type = 'ninja'
  this.beats = 'pirate'
  this.alsoBeats = 'zombie'
};

function Pirate () {
  this.type = 'pirate'
  this.beats = 'monkey'
  this.alsoBeats = 'robot'
};

function Zombie () {
  this.type = 'zombie'
  this.beats = 'monkey'
  this.alsoBeats = 'pirate'

}

function Robot () {
  this.type = 'robot'
  this.beats = 'ninja'
  this.alsoBeats = 'zombie'
}