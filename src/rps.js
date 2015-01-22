function Game() {};

Game.prototype.winner = function(choice1, choice2) {
  if(choice1.beats === choice2.type) return choice1.beatsMessage + ' You win!';
  if(choice2.beats === choice1.type) return choice2.beatsMessage + ' Computer wins!';
  if(choice2.alsoBeats === choice1.type) return choice2.alsoBeatsMessage + ' Computer wins!';
  if(choice1.alsoBeats === choice2.type) return choice1.alsoBeatsMessage + ' You win!';
  else return 'You both chose ' + choice1.type + '. It\'s a draw!'
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
  this.beatsMessage = 'Monkey fools ninja!'
  this.alsoBeatsMessage = 'Monkey unplugs robot!'
};


function Ninja () {
  this.type = 'ninja'
  this.beats = 'pirate'
  this.alsoBeats = 'zombie'
  this.beatsMessage = 'Ninja karate chops pirate!'
  this.alsoBeatsMessage = 'Ninja decapitates zombie!'
};

function Pirate () {
  this.type = 'pirate'
  this.beats = 'monkey'
  this.alsoBeats = 'robot'
  this.beatsMessage = 'Pirate skewers monkey!'
  this.alsoBeatsMessage = 'Pirate drowns robot!'

};

function Zombie () {
  this.type = 'zombie'
  this.beats = 'monkey'
  this.alsoBeats = 'pirate'
  this.beatsMessage = 'Zombie savages monkey!'
  this.alsoBeatsMessage = 'Zombie eats pirate!'

}

function Robot () {
  this.type = 'robot'
  this.beats = 'ninja'
  this.alsoBeats = 'zombie'
  this.beatsMessage = 'Robot chokes ninja!'
  this.alsoBeatsMessage = 'Robot crushes zombie!'
}
