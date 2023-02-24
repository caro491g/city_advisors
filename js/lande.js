fetch("https://projektrejse-c325.restdb.io/rest/cities", {
    method: "get",
    headers: {
        "x-apikey": "63f32d1f478852088da68494",
    },
    })
    .then((e) => e.json())
    .then(showCountries);

    function showCountries(countries) {
        countries.forEach(showCountry);
      }
      
      function showCountry(cities) {
        console.log(cities);
        const template = document.querySelector(".lande").content;
        const copy = template.cloneNode(true);
        copy.querySelector("h2").textContent = cities.country;
        copy.querySelector(".by_navn").textContent = cities.name;
        document.querySelector("main").appendChild(copy);
        
        
      }