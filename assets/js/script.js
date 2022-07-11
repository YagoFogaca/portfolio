const menuMobile = document.querySelector("#menu_mobile");

const espacoMenu = document.querySelector("#menu-mobile");

const menuLista = document.querySelector("#menu-lista");

const sairMenu = document.querySelector(".bi-x");

menuMobile.addEventListener("click", function () {
    espacoMenu.style.height = "100vh";

    espacoMenu.style.flexDirection = "column";

    espacoMenu.style.justifyContent = "space-evenly";

    menuMobile.style.display = "none";

    menuLista.style.display = "flex";

    sairMenu.style.display = "block";
});

sairMenu.addEventListener("click", function () {
    sairMenu.style.display = "none";

    menuMobile.style.display = "flex";

    menuLista.style.display = "none";

    espacoMenu.style.height = "auto";

    espacoMenu.style.flexDirection = "row";
});
