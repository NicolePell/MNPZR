describe('Game', function () {


    // Monkey (fools ninja, unplugs robot)
    // Robot (chokes ninja, crushes zombie)
    // Pirate (drowns robot, skewers monkey)
    // Ninja (karate chops pirate, decapitates zombie)
    // Zombie (eats pirate, savages monkey)

  var game

  beforeEach(function() {

    game = new Game
    monkey = new Monkey
    ninja = new Ninja
    pirate = new Pirate
    zombie = new Zombie
    robot = new Robot

  });


  it('knows monkey beats ninja', function () {
    expect(game.winner(monkey, ninja)).toEqual('You win!')

  });

  it('knows ninja beats pirate', function () {
    expect(game.winner(ninja, pirate)).toEqual('You win!')

  });

  it('knows pirate beats monkey', function () {
    expect(game.winner(pirate, monkey)).toEqual('You win!')

  });

  it('knows zombie savages monkey', function () {
    expect(game.winner(zombie, monkey)).toEqual('You win!')
  });

  it('knows robot chokes ninja', function () {
    expect(game.winner(robot, ninja)).toEqual('You win!')
  });

  it('monkey unplugs robot', function () {
    expect(game.winner(monkey, robot)).toEqual('You win!')
  });

  it('robot is unplugged by monkey', function(){
    expect(game.winner(robot, monkey)).toEqual('Computer wins!')
  });

  it('knows a draw', function () {
    expect(game.winner(monkey, monkey)).toEqual('Draw')

  });
});

describe('Monkey', function () {

  var monkey
  var ninja

  beforeEach(function () {

     ninja = new Ninja
     monkey = new Monkey

  });

  it('has a type "monkey"', function () {

    expect(monkey.type).toEqual('monkey')

  });

  it('fools ninja' , function () {

    expect(monkey.beats).toEqual('ninja')

  });

});

describe('Ninja', function () {

  var ninja

  beforeEach(function () {

     ninja = new Ninja
     pirate = new Pirate

  });

  it('has a type "ninja"', function () {

    expect(ninja.type).toEqual('ninja')

  });

  it('beats pirate', function () {

    expect(ninja.beats).toEqual('pirate')

  });
    
});

describe('Pirate', function () {

  var pirate
  var monkey

  beforeEach(function () {

     monkey = new Monkey
     pirate = new Pirate

  });


  it('has a type "pirate"', function () {

    expect(pirate.type).toEqual('pirate')

  });

  it('beats monkey', function () {

    expect(pirate.beats).toEqual('monkey')

  });

});