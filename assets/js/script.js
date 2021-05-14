// Consumir API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      dibujarData(json.results);
      paginacion(json);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
};

// Dibujar cards de personajes
const dibujarData = (data) => {
  let html = "";

  data.forEach((poke) => {
    fetch(poke.url)
      .then((response) => {
        return response.json();
      })

      .then((pksel) => {
        html += '<div class ="col-md-4  ">';
        html += '<div class="card" style="width: 18rem;">';
        html += `<img class="card-img-top" src="${pksel.sprites.other["official-artwork"].front_default}" alt="Card image cap">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title text-center nameP">${poke.name.toUpperCase()}</h5>`;

        html += `<div class="row ">`;
        html += `<div class="col-sm ">`;
        html += `<p class="card-text pkd">Abilities: </p>`;
        html += "</div>";
        html += `<div class="col-sm pkd">`;
        html += `<p class="card-text">${pksel.abilities[0].ability.name}</p>`;
        html += "</div>";
        if (pksel.abilities[1]) {
          html += `<div class="col-sm pkd">`;
          html += `<p class="card-text">${pksel.abilities[1]?.ability.name}</p>`;
          html += "</div>";
        }
        html += "</div>";
        html += `<div class="row ">`;
        html += `<div class="col-sm">`;
        html += `<p class="card-text pkd">Type: </p>`;
        html += "</div>";
        html += `<div class="col-sm pkd">`;
        html += `<img class="tipoImg" src="${tipoI(
          pksel.types[0].type.name
        )}">`;
        //html += `<p class="card-text">${pksel.types[0].type.name}</p>`;
        html += "</div>";
        if (pksel.types[1]) {
          html += `<div class="col-sm pkd">`;
          html += `<img class="tipoImg" src="${tipoI(
            pksel.types[1].type.name
          )}">`;
          // html += `<p class="card-text">${pksel.types[1]?.type.name}</p>`;
          html += "</div>";
        }

        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        document.getElementById("datosPOKE").innerHTML = html;
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  });
};

// Paginación
const paginacion = (metaData) => {
  let html = "";
  html += `<li class="page-item ${
    metaData.previous ? "" : "disabled"
  }"><a class="page-link" onclick="getData('${
    metaData.previous
  }')"> Previus</a></li>`;
  html += `<li class="page-item ${
    metaData.next ? "" : "disabled"
  }"><a class="page-link" onclick="getData('${metaData.next}')"> Next</a></li>`;
  document.getElementById("paginacion").innerHTML = html;
};

// Ejecutar getData
getData(API);

const tipoI = (tipo) => {
  switch (tipo) {
    case "grass":
      return "./assets/img/planta.png";
      break;
    case "poison":
      return "./assets/img/veneno.png";
      break;
    case "fire":
      return "./assets/img/fuego.png";
      break;
    case "water":
      return "./assets/img/agua.png";
      break;
    case "fighting":
      return "./assets/img/lucha.png";
      break;
    case "rock":
      return "./assets/img/roca.png";
      break;
    case "steel":
      return "./assets/img/acero.png";
      break;
    case "ghost":
      return "./assets/img/fantasma.png";
      break;
    case "flying":
      return "./assets/img/volador.png";
      break;
    case "psychic":
      return "./assets/img/psiquico.png";
      break;
    case "fairy":
      return "./assets/img/hada.png";
      break;
    case "ice":
      return "./assets/img/hielo.png";
      break;
    case "dark":
      return "./assets/img/siniestro.png";
      break;
    case "bug":
      return "./assets/img/bicho.png";
      break;
    case "electric":
      return "./assets/img/electrico.png";
      break;
    case "ground":
      return "./assets/img/tierra.png";
      break;
    case "dragon":
      return "./assets/img/dragon.png";
      break;
    case "normal":
      return "./assets/img/normal.png";
      break;

    default:
      break;
  }
};
