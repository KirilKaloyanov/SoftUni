function shootForTheWin(input) {
  let targets = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  input.pop();

  let shots = input;
  let shotTargets = 0;

  for (let index = 0; index < shots.length; index++) {
    const shot = shots[index];
    let target = 0;
    if (shot < targets.length) {
      target = targets[shot];
      for (let j = 0; j < targets.length; j++) {
        if (j == shot) continue;
        else if (target < targets[j] && targets[j] >= 0) targets[j] -= target;
        else if (target >= targets[j] && targets[j] >= 0) targets[j] += target; //
      }
      targets[shot] = -1;
      shotTargets++;
    }
  }

  console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}

// shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
