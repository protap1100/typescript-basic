{
  // Spread Operator
  // Rest Operator
  // Destructuring

  // Spread Operator

  const team1: string[] = ["vini", "mbappe", "rodrygo"];
  const team2: string[] = ["ronaldo", "bale", "benzema"];

  //   const fullTeam = [team1, ...team2];
  team1.push(...team2);

  const midfielder = {
    cmf: "Kross",
    dmf: "Tchuamani",
    amf: "bellingham",
  };

  const defender = {
    cb: "rudiger",
    cd: "alaba",
    rb: "carvajal",
  };

  const fullTeam = {
    ...midfielder,
    ...defender,
  };

  //   Rest Operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hi ${friend}`);
    });
  };

  greetFriends("kaka", "zidane", "henry", "vieira");
}
