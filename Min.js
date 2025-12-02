const clients = [
{ nom: "Rami", montant: 4500 },
{ nom: "Karimi", montant: 2300 },
{ nom: "Chaouki", montant: 5500 },
{ nom: "Ramoun", montant: 7700 },
];
const minMontant = clients.reduce(
  (min, client) => client.montant < min ? client.montant : min,
  Infinity
);
console.log(minMontant);

