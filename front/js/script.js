// Récupération de l'api
fetch("http://localhost:3000/api/products")
  // quand ça marche.
  .then((res) => res.json())
  // ce que l'on a reçu et qui a été traité en json.
  .then((produits) => {
    // informations du log sous forme de tableau.
    console.table(produits);
    // appel de la fonction d'affichage des canapés.
    lesKanaps(produits)
  })
  // dans le cas d'une erreur.
  .catch((err) => {
    console.log("erreur")
  });

  function lesKanaps(index) {
    // déclaration de variable de la zone d'article
    let zoneArticle = document.querySelector("#items");
    // boucle pour chaque indice(nommé 'article') dans index
    for (let article of index) {
      /* création et ajout des zones d'articles */
      zoneArticle.innerHTML += 
      `<a href="./product.html?_id=${article._id}">
      <article>
        <img src="${article.imageUrl}" alt="${article.altTxt}">
        <h3 class="productName">${article.name}</h3>
        <p class="productDescription">${article.description}</p>
      </article>
    </a>`;
    }
  }