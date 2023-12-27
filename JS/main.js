let API = "https://rickandmortyapi.com/api/character";
const API1 = "http://localhost:8000/characters";

let list = document.querySelector(".list");
async function getCharaters1() {
  let res1 = await fetch(API);
  let data2 = await res1.json();
  console.log(data2.results);
  data2.results.forEach((elem) => {
    list.innerHTML += `
    <h1 class = "p">${elem.name}</h1>
    <img src = "${elem.image}"/>
    <p class = "p">${elem.status}<p>
    <p class = "p">${elem.gender}</p>
    <p class = "p">${elem.species}</p>
    <hr/>
    `;
  });
}
getCharaters1();

let arr = [];
async function getCharaters() {
  let res = await fetch(API);
  let data = await res.json();
  data.results.forEach((elem) => {
    arr.push({
      Name: elem.name,
      Image: elem.image,
      Gender: elem.gender,
      Status: elem.status,
      Species: elem.species,
    });
  });
  //   createBook(arr)
}

getCharaters();
function createBook(rick) {
  console.log(rick);
  fetch(API1, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(rick),
  });
}

let list2 = document.querySelectorAll(".list2");
async function getCharacters2() {
  let res = await fetch(API1);
  let data = await res.json();

  list2.forEach((elem) => {
    elem.innerHTML = "";
  });
  for (let i of data) {
    for (let j of i) {
      list2.forEach((elem) => {
        elem.innerHTML += `
          <h1 class = "p">${j.Name}</h1>
            <img src="${j.Image}" alt="${j.Name}">
              <p class = "p">${j.Gender}</p>
              <p class = "p">${j.Status}</p>
              <p class = "p">${j.Species}</p>
              <hr/>
        `;
      });
    }
  }
}
getCharacters2();
