describe('Rock Paper Scissors', function () {


  describe('warriors', function () {

      it('monkey', function () {
            
	  	monkey = new Monkey
    	expect(monkey.type).toEqual('monkey');

      });

      it('ninja', function () {

    	ninja = new Ninja
    	expect(ninja.type).toEqual('ninja');
      
      });

  });
  
});