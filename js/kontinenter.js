fetch(
  "https://projektrejse-c325.restdb.io/rest/cities?q={%22$distinct%22:%22kontinent%22}",
  {
    method: "get",
    headers: {
      "x-apikey": "63f32d1f478852088da68494",
    },
  }
)
  .then((e) => e.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger vores tempalte
  const tempalte = document.querySelector("template").content;

  //cloner
  const clone = tempalte.cloneNode(true);

  //ændre indhold
  clone.querySelector("a").textContent = cat;
  clone.querySelector("a").href = `lande.html?category=${cat}`;
  //appender
  document.querySelector(".category ol").appendChild(clone);
}
