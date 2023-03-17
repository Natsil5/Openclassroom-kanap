
// Récupérer le panier depuis le local storage
let panier = JSON.parse(localStorage.getItem("panier"));

// Sélectionner l'élément HTML où afficher le contenu du panier
let affichage = document.querySelector("#cart__items");

// Vérifier si le panier est vide
if (panier.length === 0) {
  // Afficher un message indiquant que le panier est vide
  affichage.innertext = "<p>Votre panier est vide.</p>";
} else {
  // Générer le HTML pour chaque produit dans le panier
  let html = "";
  for (let produit of panier) {
    html += `
      <div class="cart__item" data-produit="${produit.produit}" data-couleur="${produit.couleur}">
        <div class="cart__item__img">
          <img src="${produit.imageUrl}" alt="${produit.altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__titlePrice">
            <h2>${produit.name}</h2>
            <p>${produit.price}€</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Quantité :</p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.quantite}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Ajouter le HTML au DOM
  affichage.innerHTML = html;}