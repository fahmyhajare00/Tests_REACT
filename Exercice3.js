const inscriptions = [
  { id: 10, nom: 'Rami', filiere: 'DEV' },
  { id: 11, nom: 'Kamali', filiere: 'DEV' },
  { id: 12, nom: 'Fahmi', filiere: 'DEV' },
  { id: 13, nom: 'Chaouki', filiere: 'DEV' }
];
function ajouterInscription(inscriptionsArray, nouvelleInscription) {
  return [...inscriptionsArray, nouvelleInscription];
}
const nouvelle = { id: 14, nom: 'Sami', filiere: 'DEV' };
const nouvellesInscriptions = ajouterInscription(inscriptions, nouvelle);

console.log(nouvellesInscriptions);

/*une fonction pure ?
Elle ne modifie pas les données existantes.
Elle retourne un nouveau tableau avec les modifications.*/
