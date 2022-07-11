const menuMobile = document.querySelector("#menu_mobile");

const espacoMenu = document.querySelector("#menu-mobile");

const menuLista = document.querySelector("#menu-lista");

const lista = document.querySelector("#menu__lista");

const sairMenu = document.querySelector(".bi-x");

const titulo = document.querySelector(".mobile");

const body = document.querySelector("body");

menuMobile.addEventListener("click", function () {
    espacoMenu.style.height = "100vh";

    espacoMenu.style.flexDirection = "column";

    espacoMenu.style.justifyContent = "space-evenly";

    menuMobile.style.display = "none";

    menuLista.style.display = "flex";

    sairMenu.style.display = "block";

    titulo.style.fontSize = "3.8rem";
});

sairMenu.addEventListener("click", function () {
    sairMenu.style.display = "none";

    menuMobile.style.display = "flex";

    menuLista.style.display = "none";

    espacoMenu.style.height = "auto";

    espacoMenu.style.flexDirection = "row";
});
