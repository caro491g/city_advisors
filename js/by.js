fetch("https://projektrejse-c325.restdb.io/rest/cities", {
  method: "get",
  headers: {
    "x-apikey": "63ef4544478852088da683b9",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(data) {
  console.log(data);
}
