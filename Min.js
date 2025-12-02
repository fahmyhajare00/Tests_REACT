const clients = [
{ nom: "Rami", montant: 4500 },
{ nom: "Karimi", montant: 2300 },
{ nom: "Chaouki", montant: 5500 },
{ nom: "Ramoun", montant: 7700 },
];
const maxMontant = Math.min(...clients.map(client => client.montant));
console.log(maxMontant); 
