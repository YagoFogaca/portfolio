const menuMobile = document.querySelector("#menu_mobile");

const espacoMenu = document.querySelector("#menu-mobile");

const menuLista = document.querySelector("#menu-lista");

const lista = document.querySelector("#menu__lista");

const sairMenu = document.querySelector("#menu_mobile-sair");

menuMobile.addEventListener("click", function () {
    espacoMenu.style.height = "100vh";

    menuMobile.style.display = "none";

    menuLista.style.display = "flex";

    espacoMenu.style.flexDirection = "column";
});
