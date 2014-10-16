function Monkey () {

this.type = 'monkey'

Monkey.prototype.versus = function(warrior) {
  if (warrior.type === 'ninja') return 'monkey'
  else if(warrior.type === 'pirate') return 'pirate'
};

};

function Ninja () {

this.type = 'ninja'

Ninja.prototype.versus = function(warrior) {
  if (warrior.type === 'monkey') return 'monkey'
  else if(warrior.type === 'pirate') return 'ninja'
};

};

function Pirate () {

this.type = 'pirate'

};


function Rules () {


 };