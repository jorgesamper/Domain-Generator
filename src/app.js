/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

window.onload = function() {
  //write your code here
  //document.getElementById("excuse").innerHTML = ExqsGenerator();
  document.querySelector("#domainBtn").addEventListener("click", function() {
    document.getElementById("domain").innerHTML = generarDominio();
  });
};

function generarDominio() {
  const pronombres = ["The", "My", "Original"];
  const palabras = ["3D", "print", "creative", "art3D"];
  const extensiones = [".com", ".net", ".org", ".io"];
  let domain = [];
  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < palabras.length; j++) {
      for (let k = 0; k < extensiones.length; k++) {
            let randomDomain = `<span class="domain">${pronombres[i]}${palabras[j]}${extensiones[k]}</span><br>`;
        domain += randomDomain;
      }
    }
  }
  return domain;
}
