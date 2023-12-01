
async function afficher() {
const reponse = await fetch("https://tyradex.tech/api/v1/pokemon/Salameche");

const pokemon = await reponse.json();
console.log(pokemon.sprites.regular);


carte.innerHTML +=

`
<div class="carte1">

    <div>
        <img class="salam" src="${pokemon.sprites.regular}">
    </div>
    <div>
    <h1 class="titre1">Salameche</h1>
    </div>
    <div>
    <h2>Types:</h2>
    <img class="feu" src="${pokemon.types[0].image}">

</div>
<div class="stats">
    <h2>Stats:</h2>
    <p>attaque: 52</p>
    <p>defense: 43</p>
    <p>vitesse: 65</p>
</div>
<div>
    <button></button>
</div>


</div>


`
}
afficher();
console.log();
let carte = document.querySelector('.carte');

// async function afficherPokemons() {
//     const reponse = await fetch("https://tyradex.vercel.app/api/v1/pokemon/carapuce");
//     const pokemons = await reponse.json();
//     console.log(pokemons);




//         balise.innerHTML +=

         
//         <div class="carte">
//         <p> dfsdfs<p/>
//             <div>
//                 <img src ="${pokemons.sprites.regular}">
//             </div>

//             <div class="fiche">      
//                  <h1>blablalba</h1>
//             </div>
//         </div>
        

// }
// let lol=document.querySelector('carte');
// afficherPokemons()
// console.log(lol);