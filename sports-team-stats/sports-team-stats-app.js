const team = {
    _players: [
    {
      firstName: 'Dean',
      lastName: 'Winchester',
      age: 43
    },
    {
      firstName: 'Fergus',
      lastName: 'Crowley',
      age: 54
    },
    {
      firstName: 'Castiel',
      lastName: 'Angel of the Lord',
      age: 100
    },
    ],
    
    
    _games: [
      {
        opponent:  'Alabama',
        teamPoints: 33,
        opponentPoints: 18
      },
      {
        opponent: 'Florida',
        teamPoints: 27,
        opponentPoints: 13
      },
      {
        opponent: 'Tech',
        teamPoints: 7,
        opponentPoints: 10
      },
    ],
      get players(){
        return this._players;
        },
      get games(){
          return this._games;
          },
    addPlayer(firstName, lastName, age){
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game ={
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      };
      this._games.push(game);
    }
    };
    team.addPlayer('Steph', 'Curry', 28);
    team.addPlayer('Lisa', 'Leslie', 44);
    team.addPlayer('Bugs', 'Bunny', 75);
    
    team.addGame('Titans', 100, 98);
    team.addGame('Bruins', 34, 7);
    team.addGame('Rams', 21, 33);
    
    console.log(team.players);
    console.log(team.games);