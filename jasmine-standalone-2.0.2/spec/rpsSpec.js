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
          monkey = new Monkey
          pirate = new Pirate
          ninja = new Ninja;

    });


      it('monkey fools ninja', function () {
        expect(monkey.versus(ninja)).toBe('monkey')
      });

      it('monkey is skewered by pirate', function () {
        expect(monkey.versus(pirate)).toBe('pirate')
      });

      it('ninja karate chops pirate', function () {
        expect(ninja.versus(pirate)).toBe('ninja')

      });

      it('ninja gets fooled by monkey', function () {
        expect(ninja.versus(monkey)).toBe('monkey') 

      });

      it('pirate skewers monkey', function() {
        expect(pirate.versus(monkey)).toBe('pirate')
      });

      it('pirate gets chopped by ninja', function () {
        expect(pirate.versus(ninja)).toBe('ninja')

      });


      it('two monkeys draw', function () {
        expect(monkey.versus(monkey)).toBe('draw')

      });

      it('two ninjas draw', function () {
        expect(ninja.versus(ninja)).toBe('draw')

      });

      it('two pirates draw', function () {
        expect(pirate.versus(pirate)).toBe('draw')

      });


  });
  
});