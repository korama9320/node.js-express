const body = document.getElementsByTagName("body")[0];
fetch("http:\\localhost:3000/get").then((data) =>
  data.json().then((data) => {
    for (i of data) {
      body.innerHTML += `<div><img src="${i.bl}" > <p>${i.bn}</p></div>`;
    }
  })
);
