var obj = {
  fun: "js",
  human: {
    fname: "Prash",
    alive: true,
    "yo yo": "yes yes",
    1: 22,
    33: 44,
  },
  gg: "99",
  i: [
    "prash",
    [2, 3, 4, 56],
    {
      fname: "Prash",
      lname: "BM",
      age: 555,
    },
  ],
  prash: "winner",
};
console.log(obj["i"][1][0]);
console.log(obj["i"][2].age);
console.log(obj.i[2].age);

console.log(obj.i);
console.log(obj.human["yo yo"]);
console.log(obj.gg);
console.log(obj.prash);

console.log("prash" in obj);




