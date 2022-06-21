function combat(input) {
  let energy = Number(input.shift());
  let battlesWon = 0;

  for (let i = 0; i < input.length; i++) {
    let distance = input[i];
    if (distance == "End of battle") {
      console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
      break;
    }
    distance = Number(distance);
    if (energy < distance) {
      console.log(
        `Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`
      );
      break;
    } else {
      energy -= distance;
      battlesWon++;
    }
    if (battlesWon % 3 == 0) energy += battlesWon;
  }
}

combat(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
combat(["200", "54", "14", "28", "13", "End of battle"]);
