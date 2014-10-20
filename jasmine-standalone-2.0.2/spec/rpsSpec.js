describe('Game', function () {

  var player1
  var player2
  var game

  beforeEach(function() {

    player1 = new Player
    player2 = new Player
    game = new Game(player1, player2)
    monkey = new Monkey
    ninja = new Ninja
    pirate = new Pirate

  });

  it('can add players', function () {

    expect(game.players).toEqual([player1, player2])

  });

  it('knows monkey beats ninja', function () {

    player1.chooses(monkey)
    player2.chooses(ninja)
    expect(game.winner(player1, player2)).toEqual('player1')

  });

  it('knows ninja beats pirate', function () {

    player1.chooses(ninja)
    player2.chooses(pirate)
    expect(game.winner(player1, player2)).toEqual('player1')

  });

  it('knows pirate beats monkey', function () {

    player1.chooses(pirate)
    player2.chooses(monkey)
    expect(game.winner(player1, player2)).toEqual('player1')

  });

  it('knows which player to return', function () {

    player1.chooses(ninja)
    player2.chooses(monkey)
    expect(game.winner(player1, player2)).toEqual('player2')

  });

  it('knows a draw', function () {

    player1.chooses(monkey)
    player2.chooses(monkey)
    expect(game.winner(player1, player2)).toEqual('draw')

  });

  describe('Player', function () {


    it('can choose a warrior', function () {

        player = new Player
        monkey = new Monkey

    player.chooses(monkey)
    expect(player.choice).toEqual([monkey])

    });

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