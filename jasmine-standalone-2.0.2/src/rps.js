function Monkey () {

this.type = 'monkey'

	Monkey.prototype.versus = function(warrior) {
	  if (warrior.type === 'ninja') return 'monkey'
	  else if(warrior.type === 'pirate') return 'pirate'
	  else return 'draw'
	};

};

function Ninja () {

this.type = 'ninja'

	Ninja.prototype.versus = function(warrior) {
	  if (warrior.type === 'monkey') return 'monkey'
	  else if(warrior.type === 'pirate') return 'ninja'
	  else return 'draw'
	};

};

function Pirate () {

this.type = 'pirate'

	Pirate.prototype.versus = function(warrior) {
	if (warrior.type === 'monkey') return 'pirate'	
	else if(warrior.type == 'ninja') return 'ninja'
	else return 'draw'
	};

};


function Rules () {};
