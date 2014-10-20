describe('Game', function () {

  var player1
  var player2
  var game

  it('can add players', function () {


    player1 = new Player
    player2 = new Player

    game = new Game(player1, player2)
    expect(game.players).toEqual([player1, player2])

  });

  it('knows monkey beats ninja', function () {

    monkey = new Monkey
    ninja = new Ninja
    game = new Game
    player1 = new Player
    player2 = new Player

    player1.chooses(monkey)
    player2.chooses(ninja)
    expect(game.winner(player1, player2)).toEqual('player1')

  });

  it('knows ninja beats pirate', function () {

    pirate = new Pirate
    ninja = new Ninja
    game = new Game
    player1 = new Player
    player2 = new Player

    player1.chooses(ninja)
    player2.chooses(pirate)
    expect(game.winner(player1, player2)).toEqual('player1')

  });

  it('knows pirate beats monkey', function () {

    pirate = new Pirate
    ninja = new Ninja
    game = new Game
    player1 = new Player
    player2 = new Player

    player1.chooses(pirate)
    player2.chooses(monkey)
    expect(game.winner(player1, player2)).toEqual('player1')

  });

  it('knows which player to return', function () {

    monkey = new Monkey
    ninja = new Ninja
    game = new Game
    player1 = new Player
    player2 = new Player

    player1.chooses(ninja)
    player2.chooses(monkey)
    expect(game.winner(player1, player2)).toEqual('player2')

  });

  it('knows a draw', function () {

    monkey = new Monkey
    game = new Game
    player1 = new Player
    player2 = new Player

    player1.chooses(monkey)
    player2.chooses(monkey)
    expect(game.winner(player1, player2)).toEqual('draw')

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

describe('Player', function () {

  beforeEach(function () {

    player = new Player

  });

  it('can choose a warrior', function () {

    monkey = new Monkey

    player.chooses(monkey)
    expect(player.choice).toEqual([monkey])

  });

});


