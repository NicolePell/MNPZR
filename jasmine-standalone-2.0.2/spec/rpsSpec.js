describe('Game', function () {

  var player1
  var player2
  var game

  it('can add players', function () {

    player1 = new Player
    player2 = new Player
    game = new Game(player1, player1)
    expect(game.players).toEqual([player1, player1])

  });

 });

describe('Monkey', function () {

  var monkey

  it('has a type "monkey"', function () {

    monkey = new Monkey
    expect(monkey.type).toEqual('monkey')

  });

  it('fools ninja' , function () {

    ninja = new Ninja
    expect(monkey.beats).toEqual('ninja')

  });

});

describe('Ninja', function () {

  var ninja

  it('has a type "ninja"', function () {

    ninja = new Ninja
    expect(ninja.type).toEqual('ninja')

  });

  it('beats pirate', function () {

    pirate = new Pirate
    expect(ninja.beats).toEqual('pirate')

  });
    
});

describe('Pirate', function () {

  var pirate

  it('has a type "pirate"', function () {

    pirate = new Pirate
    expect(pirate.type).toEqual('pirate')

  });

  it('beats monkey', function () {

    monkey = new Monkey
    expect(pirate.beats).toEqual('monkey')

  });

});

















