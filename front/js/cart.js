
// Récupérer le panier depuis le local storage
let panier = JSON.parse(localStorage.getItem("panier"));
console.table(panier)

// Sélectionner l'élément HTML où afficher le contenu du panier
let affichage = document.querySelector("#cart__items");

// Vérifier si le panier est vide
if (panier.length === 0) {
  // Afficher un message indiquant que le panier est vide
  affichage.innertext = "<p>Votre panier est vide.</p>";
} else {
  // Générer le HTML pour chaque produit dans le panier
  for (let article of panier) {
    let html = "";
    console.log(article.produit)
    fetch(`http://localhost:3000/api/products/${article.produit}`)
     .then((res) => res.json())
     .then((obj) => {
        console.log(obj)
    html += `
      <div class="cart__item" data-produit="${article.produit}" data-couleur="${article.couleur}">
        <div class="cart__item__img">
          <img src="${obj.imageUrl}" alt="${obj.altTxt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__titlePrice">
            <h2>${obj.name}</h2>
            <p>${article.couleur}<p>
            <p>${obj.price}€</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Quantité :</p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${article.quantite}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </div>
    `;
     
      // Ajouter le HTML au DOM
    affichage.innerHTML += html;
    
    //listener
    })
  }
}

//modifier les quantités

//supprimer article

//afficher total du prix et nombre d'article