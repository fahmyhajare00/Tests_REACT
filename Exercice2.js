const personnes = [
  { nom: "Rami", age: 33, estMember: true },
  { nom: "Fatihi", age: 24, estMember: false },
  { nom: "Chakib", age: 45, estMember: true },
  { nom: "Mounir", age: 37, estMember: false },
];
const nomAgés = personnes
  .filter(pers => pers.estMember === true)
  .map(pers => pers.nom);

console.log(nomAgés);
