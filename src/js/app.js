import "../css/main.scss";
import NaviToggle from "../js/navigation/naviToggle";
import Route from "./route/route";
import Router from "./route/router";
// load every image needed
const requireContext = require.context("../img", true, /^\.\/.*\.png$/);
requireContext.keys().map(requireContext);

const naviToggle = new NaviToggle(); 

window.onload = () => {
    const elm = document.getElementById("side-nav");
    elm.style.display = null;
};

document.getElementById("nav-toggle").addEventListener("click", (e) => {       
    naviToggle.toggleHandler(e);
});

document.querySelectorAll(".side-nav__list-item-link").forEach((el) => {
    el.addEventListener("click", (e) => {
        naviToggle.toggleHandler(e);
    });
});
    

// Load all routes
// const routes = [
//     new Route("home", "_home.html", true),
//     new Route("menu", "_menu.html")
// ]; 

// Register Routes to load
// const router = new Router(routes);
// router.init();
