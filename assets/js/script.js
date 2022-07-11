const menuMobile = document.querySelector("#menu_mobile");

const espacoMenu = document.querySelector("#menu-mobile");

const menuLista = document.querySelector("#menu-lista");

const lista = document.querySelector("#menu__lista");

const sairMenu = document.querySelector("#menu_mobile-sair");

menuMobile.addEventListener("click", function () {
    espacoMenu.style.height = "100vh";

    espacoMenu.style.flexDirection = "column";

    espacoMenu.style.justifyContent = "space-evenly";

    menuMobile.style.display = "none";

    menuLista.style.display = "flex";
});
