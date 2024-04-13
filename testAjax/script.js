/**
 * Une fonction qui fait une requete HTTP a l'url indiquer 
 * est qui extrait le json de la reponse HTTP
 * @param {*} url 
 * @returns une promesse qui quand elle resolue contient les données
 */
async function fetchJSON (url){
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
function afficher(lesMonstres){
    let chaine=""
    let listeMonstre= lesMonstres.results
    for (const unMonstre of listeMonstre) {
        chaine+=`
        <div class='col my-2'>
        <div class="card" style="width: 18rem;">
        <img src="https://www.dnd5eapi.co/api/images/monsters/${unMonstre.index}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${unMonstre.name}</h5>
          <p class="card-text"></p>
        </div>
      </div>
      </div>`
    }
    return chaine
}



//les variables qui coredpondent a different element html
let divMonstres= document.querySelector("#divMonstres")
// On lance la requete HTTP au chargement de la page
fetchJSON("https://www.dnd5eapi.co/api/monsters").then(function(data){
    //Ce code est executé seulement que quand la promesse est resolue
    console.log(data)
    divMonstres.innerHTML=afficher(data)

})
