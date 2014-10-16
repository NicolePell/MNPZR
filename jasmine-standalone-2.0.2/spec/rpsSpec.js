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
    monkey = new Monkey
    expect(monkey.versus(ninja)).toBe('monkey')
  });

  it('monkey is skewered by pirate', function () {
    monkey = new Monkey
    pirate = new Pirate
    expect(monkey.versus(pirate)).toBe('pirate')
  });

  it('ninja karate chops pirate', function () {

    ninja = new Ninja
    pirate = new Pirate
    expect(ninja.versus(pirate)).toBe('ninja')

  });

  it('ninja gets fooled by monkey', function () {
    ninja = new Ninja
    pirate = new Pirate
    expect(ninja.versus(monkey)).toBe('monkey') 

  });




  });
  
});