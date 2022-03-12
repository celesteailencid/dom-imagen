/* EJERCICIO 04

imagen
Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

Opción elegida	Ancho de imagen
chica	200px
mediana	500px
grande	800px */

let tamanioImagen = prompt("Ingrese tamaño de imagen (chica/mediana/grande");

if (tamanioImagen == "chica")  {
    tamanioImagen = "200px";
} else if (tamanioImagen == "mediana") {
    tamanioImagen = "500px";
} else if (tamanioImagen == "grande") {
    tamanioImagen = "1000px"
}

let imagenRandom = document.getElementById("imagen-cordi");
imagenRandom.classList.add("src");
imagenRandom.src="https://www.lavanguardia.com/files/image_948_465/uploads/2019/10/04/5fa533342d51e.jpeg";
imagenRandom.style.width = tamanioImagen;



