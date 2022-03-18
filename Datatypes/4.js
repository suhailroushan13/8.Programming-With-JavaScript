var universe = {
  earth: "people",
  human: {
    female: {
      alive: true,
      girl: "girl",
      heights: 60,
      mobile: 991872939272
    },
    male: {
      alive: true,
      boy: "boys",
      heights: 100,
      mobile: 9618211626
    }
  },
  mars: "alien",
  moon: 1434545,
  pluto: false,
  sun: "light",
  venus: {
    propert: "light"
  }
};

console.log(universe.human.female.mobile);
console.log(universe.human.female["mobile"]);
