const tiles = {
    red: { quantity: 0, points: 28 },
    blue: { quantity: 0, points: 16 },
    yellow: { quantity: 0, points: 7 }
  };
  
  //Camilo llegó... 
  const firstPlace = 3;
  const lastPlace = 4;
  const intermediate = 6;

  tiles.red.quantity = firstPlace;
  tiles.blue.quantity = intermediate;
  tiles.yellow.quantity = lastPlace;
  
  function calculateScore() {
    let totalScore = 0;
    for (let tileType in tiles) {
      totalScore += tiles[tileType].quantity * tiles[tileType].points;
    }
    return totalScore;
  }
  
  const totalScore = calculateScore();
  const firstPlaceScore = tiles.red.quantity * tiles.red.points;
  const extraBlueTiles = 2 * tiles.blue.points;
  const yellowDiscount = tiles.yellow.quantity ** 2;
  const firstPlaceScoreExtra = (firstPlaceScore + extraBlueTiles) - yellowDiscount;
  
  console.log(`Puntos ganados: ${totalScore}`);
  console.log(`En el primer lugar acumuló ${firstPlaceScore} puntos`);
  console.log(`Puntos en el primer lugar con operaciones extra: ${firstPlaceScoreExtra}`);
  