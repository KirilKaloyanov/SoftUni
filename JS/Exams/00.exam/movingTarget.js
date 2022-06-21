function movingTarget(input) {
  let targets = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  input.pop();
  let commands = input;

  for (let i = 0; i < commands.length; i++) {
    let element = commands[i];
    let command = element.split(" ");
    let command1 = Number(command[1]);
    let command2 = Number(command[2]);

    if (command[0] == "Shoot" && command1 < targets.length && command1 >= 0) {
      targets[command1] -= command2;
      if (targets[command1] <= 0) targets.splice(command1, 1);
    }

    if (command[0] == "Add") {
      if (command1 > targets.length || command1 < 0)
        console.log("Invalid placement!");
      else targets.splice(command1, 0, command2);
    }
    if (command[0] == "Strike") {
      const small = command1 - command2;
      const big = command1 + command2;
      if (big >= targets.length || small < 0) {
        console.log("Strike missed!");
      } else {
        targets.splice(small, command2 * 2 + 1);
      }
    }
  }

  console.log(targets.join("|"));
}

movingTarget(["1 2 3 4 5 6 7 8 9", "Strike 8 1", "End"]);
