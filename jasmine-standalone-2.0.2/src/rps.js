function Game (player1, player2) {

    this.players = [player1, player2]

};

function Player () {}

function Monkey () {

  this.type = 'monkey'
  this.beats = 'ninja'
}




function Ninja () {

  this.type = 'ninja'
  this.beats = 'pirate'
}

function Pirate () {

  this.type = 'pirate'
  this.beats = 'monkey'

}