/**
 * Une fonction qui fait une requete HTTP a l'url indiquer 
 * est qui extrait le json de la reponse HTTP
 * @param {*} url 
 * @returns une promesse qui quand elle resolue contient les données
 */
async function fetchJSON(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

/**
 * Fonction qui créer une chaine html avec
 *  les lignes du tableau pour les différentes API
 * @param {*} lesApi l'objet qui contient les APIs
 * @returns une string avec du code html
 */
function afficher(lesSorts) {
    let chaine = ""
    let listeSorts = lesSorts.results
    for (const unSort of listeSorts) {
        chaine += `
        <div class='col my-2'>
        <div class="card">
        <p class="heading">
        ${unSort.name}
        </p>
        <p>
        ${unSort.level}
        </p>
        <p>
        
        </p>
        </div>
      </div>`
    }
    return chaine
}



//les variables qui coredpondent a different element html
let divSorts = document.querySelector("#divSorts")
// On lance la requete HTTP au chargement de la page
fetchJSON("https://www.dnd5eapi.co/api/spells").then(function (data) {
    //Ce code est executé seulement que quand la promesse est resolue
    console.log(data)
    divSorts.innerHTML = afficher(data)

})
