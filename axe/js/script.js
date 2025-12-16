// // Récupération des plats depuis le fichier JSON
// const reponse = await fetch("../axe/js/Plats.json");
// const plats = await reponse.json();
// for (const plat of plats) {
//     // Image
//     const imgPlat = document.getElementById("imgPlat");
//     imgPlat.src = plat.image;
    
//     // Nom
//     const nomPlat = document.getElementById("nomPlat");
//     nomPlat.innerText = plat.nom;
    
//     // Description
//     const descriptionPlat = document.getElementById("descriptionPlat");
//     descriptionPlat.innerText = plat.description;
    
//     // Prix
//     const prixPlat = document.getElementById("prixPlat");
//     prixPlat.innerText = `${plat.prix} €`;

// }      
const reponse = await fetch("../axe/js/Plats.json");
const plats = await reponse.json();     

function afficherPlats(plats) {
// Récupérer les plats depuis le fichier JSON
    const menu= document.getElementById("menu");

    for (const plat of plats) {
      // Ajouter chaque plat dans la div
      menu.insertAdjacentHTML("beforeend", `
        <div class="bg-white rounded-lg shadow-lg p-4 inset-shadow-sm">
          <img src="${plat.image}" alt="${plat.nom}" class="aspect-2/2  rounded-t-lg">
          <h2 class="text-xl font-bold mt-2">${plat.nom}</h2>
          <div class="text-amber-400">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p class="text-gray-600">${plat.description}</p>
          <p class="text-amber-600 font-bold mt-2">${plat.prix} €</p>
        </div>
      `);
    };
  }   
  afficherPlats(plats);

     // Filtrage des plats par catégorie
     
const btnTout= document.querySelector(".btn-tout");
btnTout.addEventListener("click", () => {
  document.getElementById("menu").innerHTML = "";
 afficherPlats(plats);
});

const btnEntrees = document.querySelector(".btn-entrees");
btnEntrees.addEventListener("click", () => {
  const Entree = plats.filter(plat => plat.type === "Entrées");
  document.getElementById("menu").innerHTML = "";
 afficherPlats(Entree);
});
const btnPlats = document.querySelector(".btn-plats");
btnPlats.addEventListener("click", () => {
  const Platss = plats.filter(plat => plat.type === "plat");
  document.getElementById("menu").innerHTML = "";
  afficherPlats(Platss);
});
const btnDesserts = document.querySelector(".btn-desserts");
btnDesserts.addEventListener("click", () => {
  const Desserts = plats.filter(plat => plat.type === "Desserts");
  document.getElementById("menu").innerHTML = "";
    afficherPlats(Desserts);
});
const btnBoissons = document.querySelector(".btn-boissons");
btnBoissons.addEventListener("click", () => {
  const Boissons = plats.filter(plat => plat.type === "Boissons");
  document.getElementById("menu").innerHTML = "";
 afficherPlats(Boissons);
});

//navigation burger
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });




