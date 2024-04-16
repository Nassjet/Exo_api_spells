/**
 * Une fonction qui fait une requete HTTP a l'url indiquer 
 * est qui extrait le json de la reponse HTTP
 * @param {*} url 
 * @returns une promesse qui quand elle resolue contient les données
 */
async function fetchJSON(urlDuSort) {
    let responseDuSort = await fetch(urlDuSort)
    let dataDuSort = await responseDuSort.json()
    return dataDuSort
}



/**
 * Fonction qui affiche la description d'un sort
 * @param {string} urlDuSort L'URL du sort dont on veut afficher la description
 * @returns Une chaîne de caractères représentant la description du sort
 */
async function afficher(urlDuSort) {
    // Effectuer une requête HTTP à l'URL du sort pour obtenir les informations détaillées
    let dataDuSort = await fetchJSON(urlDuSort);

    // Extraire la description du sort des données détaillées
    let descriptionDuSort = dataDuSort.desc;

    return descriptionDuSort;
}





//les variables qui coredpondent a different element html
let divSorts = document.querySelector("#divSorts")
// On lance la requete HTTP au chargement de la page
fetchJSON("https://www.dnd5eapi.co/api/spells/").then(function (data) {
    //Ce code est executé seulement que quand la promesse est resolue
    console.log(data)
    divSorts.innerHTML = afficher(data)

})


