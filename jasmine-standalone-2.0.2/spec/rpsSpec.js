describe('Monkey Ninja Pirate', function () {


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

    beforeEach(function () {
          rules = new Rules

    });

      it('monkey fools ninja', function () {

        expect(rules.championOf(monkey, ninja)).toBe('monkey')

      });

      it('ninja karate chops pirate', function () {

        expect(rules.championOf(ninja, pirate)).toBe('ninja')
        
      });

      it('pirate skewers monkey', function () {

        expect(rules.championOf(pirate, monkey)).toBe('pirate') 

      });

      it('ninja is fooled by monkey', function () {

        expect(rules.championOf(ninja, monkey)).toBe('monkey')

      });






  });
  
});