{
  const personDetails = {
    name: "protap",
    contactInfo: {
      phone: 8801957290846,
      address: "Beki Garail",
    },
    age: 30,
  };
  const {
    name,
    contactInfo: { phone },
  } = personDetails;

  const myFriends = ["don", "john", "motu", "patlu"];

  const [, bestFriend, ...rest] = myFriends;
}
