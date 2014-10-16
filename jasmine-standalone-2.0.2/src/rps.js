function Monkey () {

this.type = 'monkey'

};

function Ninja () {

this.type = 'ninja'

};

function Pirate () {

this.type = 'pirate'

};


function Rules () {


  Rules.prototype.championOf = function(warrior1, warrior2) {
    if (warrior1.type === 'monkey' && warrior2.type === 'ninja') return 'monkey'
    else if (warrior1.type === 'ninja' && warrior2.type === 'monkey') return 'monkey'
    else if (warrior1.type === 'ninja' && warrior2.type === 'pirate') return 'ninja'
    else if (warrior1.type === 'pirate' && warrior2.type === 'monkey') return 'pirate' 

     
     };
};