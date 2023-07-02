const inicioElement = document.querySelector("#Menu li:nth-child(1)");
const rickElement = document.querySelector("#Menu li:nth-child(2)");
const jerryElement = document.querySelector("#Menu li:nth-child(3)");
const mortyElement = document.querySelector("#Menu li:nth-child(4)");
let nombre = "";
let pagina = 1;

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

// Agrega los manejadores de evento para cada elemento
inicioElement.addEventListener("click", function () {
  nombre = "";
  pagina = 1;
  cargarApi();
});
mortyElement.addEventListener("click", () => {
  pagina = 1;
  nombre = "Morty";
  cargarApi();
});

jerryElement.addEventListener("click", function () {
  pagina = 1;
  nombre = "Jerry";
  cargarApi();
});
rickElement.addEventListener("click", function () {
  pagina = 1;
  nombre = "Rick";
  cargarApi();
});

try {
  btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
      pagina--;
      cargarApi();
    } else {
      console.log("Pai Abusa");
    }
  });
} catch (error) {
  console.log("Error: " + error);
}
btnSiguiente.addEventListener("click", () => {
  try {
    if (pagina < 50) {
      pagina += 1;
      cargarApi();
    } else {
      console.log("Klk");
    }
  } catch (error) {
    console.log(error);
  }
});
const cargarApi = async () => {
  const conexion = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pagina}&name=${nombre}`
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
