const Menu = document.querySelector("#Menu");
const prueba = Menu.querySelector("ul");

console.log(prueba.textContent);
Menu.children;
console.log(Menu)
var mortyElement = document.querySelector('#Menu li:nth-child(1)');
var rickElement = document.querySelector('#Menu li:nth-child(2)');

// Agrega los manejadores de evento para cada elemento
mortyElement.addEventListener('click', function() {
  console.log('Morty');
});

rickElement.addEventListener('click', function() {
  console.log('Rick');
});