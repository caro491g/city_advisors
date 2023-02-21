fetch("https://projektrejse-c325.restdb.io/rest/cities/" + id, {
  method: "get",
  headers: { "x-apikey": "63f32d1f478852088da68494" },
})
  .then((e) => e.json())
  .then(showCity);

/*function showCities(cities) {
  cities.forEach(showCity);
}*/

function showCity(city) {
  document.querySelector(".by h1").textContent = city.name;
  document.querySelector(".by .introduktion").textContent = city.description;
  document.querySelector(".liste li span").textContent = city.food;
  document.querySelector(".liste .sikkerhed").textContent = city.security;
  document.querySelector(".liste .pris").textContent = city.price;
  document.querySelector(".liste .arkitektur").textContent = city.architecture;
  document.querySelector(".by .anbefaling").textContent = city.activities;
  document.querySelector(".grid_1_1 img").src = city.picture;
}
