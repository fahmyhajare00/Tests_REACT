const clients = [
{ nom: "Rami", montant: 4500 },
{ nom: "Karimi", montant: 2300 },
{ nom: "Chaouki", montant: 5500 },
{ nom: "Ramoun", montant: 7700 },
];
const maxMontant = clients.reduce((max, client) =>
  client.montant > max ? client.montant : max
, 0);
console.log(maxMontant);





