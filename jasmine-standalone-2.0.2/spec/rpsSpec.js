describe('Rock Paper Scissors', function () {


  describe('warriors', function () {

      it('monkey', function () {
            
  	  	monkey = new Monkey
      	expect(monkey.type).toEqual('monkey')

      });

      it('ninja', function () {

      	ninja = new Ninja
      	expect(ninja.type).toEqual('ninja')
      
      });

      it('pirate', function () {

        pirate = new Pirate
        expect(pirate.type).toEqual('pirate')

      });
     
  });

  describe('Rules of MNP', function () {

      it('monkey fools ninja', function () {

        rules = new Rules
        expect(rules.championOf(monkey, ninja)).toBe('monkey')

      });

      it('ninja karate chops pirate', function () {

        rules = new Rules
        expect(rules.championOf(ninja, pirate)).toBe('ninja')
        
      });

      it('pirate skewers monkey', function () {

        rules = new Rules
        expect(rules.championOf(pirate, monkey)).toBe('pirate') 


      });



  });
  
});