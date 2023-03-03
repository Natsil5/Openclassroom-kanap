// Récupérer l'id de la page et la stocker dans une variable
// Déclaration de la variable qui va stocker l'id de la page
let params = new URLSearchParams(document.location.search);
let id = params.get("_id");
console.log(id)

// Récupération de l'API
fetch(`http://localhost:3000/api/products/${id}`)
  // Quand ça marche.
  .then((res) => res.json())
  // Ce que l'on a reçu et qui a été traité en JSON.
  .then((produit) => {
    // Informations du log sous forme de tableau.
    console.log(produit);
    // Appel de la fonction d'affichage
    afficheProduit(produit);
  })
  // Dans le cas d'une erreur.
  .catch((err) => {
    console.log("erreur")
  });

// Afficher le produit
function afficheProduit (produit) {

  // Créer le HTML
  let affichage = document.querySelector('.item');
  let html = "";

  html += `
    <article>
      <div class="item__img">
        <img src="${produit.imageUrl}" alt="${produit.altTxt}">
      </div>

      <div class="item__content">
        <div class="item__content__titlePrice">
          <h1 id="title">${produit.name}</h1>
          <p>Prix : <span id="price">${produit.price}</span>€</p>
        </div>

        <div class="item__content__description">
          <p class="item__content__description__title">Description :</p>
          <p id="description">${produit.description}</p>
        </div>

        <div class="item__content__settings">
          <div class="item__content__settings__color">
            <label for="color-select">Choisir une couleur :</label>
            <select name="color-select" id="colors">
              <option value="">-- SVP, choisissez une couleur --</option>
              ${produit.colors.map(color => `<option value="${color}">${color}</option>`).join("")}
            </select>
          </div>

          <div class="item__content__settings__quantity">
            <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
            <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
          </div>
        </div>

        <div class="item__content__addButton">
          <button id="addToCart">Ajouter au panier</button>
        </div>
      </div>
    </article>
  `;

  affichage.innerHTML = html;
}

// Créer le stock local
