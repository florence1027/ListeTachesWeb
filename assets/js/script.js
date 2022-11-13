//Liaison des éléments
const inputTexte = document.getElementById('saisie-tache');
const iconeAjout = document.querySelector('.icone-ajout');
const listeAfaire = document.querySelector('.liste-afaire');
const listeFait = document.querySelector('.liste-fait');
const iconeTrash = document.querySelector('.icone-trash');

//Déclaration des événements
iconeAjout.addEventListener('click', AjouterTache);
inputTexte.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        AjouterTache();
    }
});
iconeTrash.addEventListener('click', viderPoubelle);

//Fonctions
function AjouterTache() {
    let texteTache = inputTexte.value;

    if (texteTache) {
        //Création du nouvel élément 
        let nouvelTache = document.createElement('li');

        nouvelTache.innerHTML = texteTache;
        nouvelTache.classList.add('tache');
        nouvelTache.addEventListener('click', TerminerTache);

        listeAfaire.append(nouvelTache);

        inputTexte.value = "";
    }
}

function TerminerTache(e) {
    let tache = e.target;

    tache.classList.add('fait');
    tache.removeEventListener('click', TerminerTache);

    listeFait.append(tache);
}

function viderPoubelle() {
    let taches = listeFait.querySelectorAll('li');

    for (let i = 0; i < taches.length; i++) {
        taches[i].remove();
    }
}