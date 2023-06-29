var InicioElement = document.querySelector("#Menu li:nth-child(1)");
var rickElement = document.querySelector("#Menu li:nth-child(2)");
var JerryElement = document.querySelector("#Menu li:nth-child(3)");
var mortyElement = document.querySelector("#Menu li:nth-child(4)");
var name = "";
// Agrega los manejadores de evento para cada elemento
mortyElement.addEventListener("click", () =>{
    pagina=1;
  name = "Morty";
  cargarApi();
});

rickElement.addEventListener("click", function () {
    pagina=1;
  name = "Rick";
  cargarApi();
});
JerryElement.addEventListener("click", function () {
    pagina=1
  name = "Jerry";
  cargarApi();
});

InicioElement.addEventListener("click", function () {
  name = "";
  pagina = 1;
  cargarApi();
});

var pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina--;
    cargarApi();
  } else {
    console.log("Pai Abusa");
  }
});
btnSiguiente.addEventListener("click", () => {
  if (pagina < 50) {
    pagina += 1;
    cargarApi();
  } else {
    console.log("Klk");
  }
});
const cargarApi = async () => {
  const conexion = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pagina}&name=${name}`
  );
  const respuesta = await conexion.json();
  let character1 = "";
  respuesta.results.forEach((character) => {
    character1 += `<div class="contenido">
    <img src="${character.image}" alt="">
    <div class="texto">
        <p class="reseña"><span>${character.name}:</span>    ${character.status}</p>
        <p class="reseña"><span>Ubicación:</span>    ${character.location.name}</p>
    </div></div>`;
  });
  document.getElementById("contenedor").innerHTML = character1;
};
cargarApi();
