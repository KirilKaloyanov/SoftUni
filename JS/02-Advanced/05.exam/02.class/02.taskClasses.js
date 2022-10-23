class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
    //player object = {name, age, playerValue}
  }

  newAdditions(footballPlayers) {
    let result = [];
    for (let player of footballPlayers) {
      player = player.split("/");
      // console.log(player);
      player[1] = Number(player[1]);
      player[2] = Number(player[2]);
      let index = this.invitedPlayers.findIndex((pl) => pl.name == player[0]);
      if (index < 0) {
        this.invitedPlayers.push({
          name: player[0],
          age: player[1],
          playerValue: player[2],
        });
        result.push(player[0]);
      } else {
        let oldPlayerValue = this.invitedPlayers[index].playerValue;
        if (oldPlayerValue < player[2]) {//oldPlayerValue !== "Bought" && 
          oldPlayerValue = player[2];
        }
      }
    }
    let str = result.join(", ");
    return `You successfully invite ${str}.`;
  }

  signContract(selectedPlayer) {
    const tempArr = selectedPlayer.split("/");

    const plName = tempArr[0];
    const plOffer = Number(tempArr[1]);

    let index = this.invitedPlayers.findIndex((pl) => pl.name == plName);
    if (index < 0) {
      throw new Error(`${plName} is not invited to the selection list!`);
    } else {
      const priceDifference =
        plOffer - Number(this.invitedPlayers[index].playerValue);
      if (priceDifference < 0) {
        throw new Error(
          `The manager's offer is not enough to sign a contract with ${plName}, ${priceDifference} million more are needed to sign the contract!`
        );
      } else {
        this.invitedPlayers[index].playerValue = "Bought";
        return `Congratulations! You sign a contract with ${plName} for ${plOffer} million dollars.`;
      }
    }
  }

  ageLimit(name, age) {
    let index = this.invitedPlayers.findIndex((pl) => pl.name == name);
    if (index < 0) {
      throw new Error(`${name} is not invited to the selection list!`);
    } else {
      let plAge = Number(this.invitedPlayers[index].age);

      if (plAge < age) {
        let ageDifference = age - plAge;
        if (ageDifference < 5) {
          return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else {
          return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
      } else {
        return `${name} is above age limit!`;
      }
    }
  }
  transferWindowResult() {
    let str = `Players list:\n`;
    this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
    for (let player of this.invitedPlayers) {
      str += `Player ${player.name}-${player.playerValue}\n`;
    }
    return str.trim();
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.ageLimit("Lionel Messi", 33));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.ageLimit("Pau Torres", 26));
console.log(fTeam.signContract("Kylian Mbappé/240"));
