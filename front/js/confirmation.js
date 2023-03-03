// On récupère le numéro de commande et les produits depuis le localStorage
const orderId = localStorage.getItem("orderId");
const products = JSON.parse(localStorage.getItem("products"));

// On récupère l'élément DOM où on va afficher les informations de confirmation
const confirmationContainer = document.querySelector(".confirmation");

// On crée une variable qui va contenir le code HTML des produits dans le panier
let productsHTML = "";

// On boucle sur les produits pour ajouter leur HTML à la variable productsHTML
for (let product of products) {
  productsHTML += `
    <div class="confirmation__product">
      <img src="${product.imageUrl}" alt="${product.name}" class="confirmation__product__image">
      <div class="confirmation__product__infos">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Couleur: ${product.color}</p>
        <p>Quantité: ${product.quantity}</p>
        <p>Prix: ${product.price / 100} €</p>
      </div>
    </div>
  `;
}

// On crée le code HTML de la confirmation
const confirmationHTML = `
  <p>Commande validée !</p>
  <p>Votre numéro de commande est : <span>${orderId}</span></p>
  <div class="confirmation__products">${productsHTML}</div>
`;

// On affiche le code HTML dans la page
confirmationContainer.innerHTML = confirmationHTML;

// On supprime les informations de commande et de produits du localStorage
localStorage.removeItem("orderId");
localStorage.removeItem("products");
