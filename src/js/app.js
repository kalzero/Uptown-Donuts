import "../css/main.scss";
import imgbuilding from "../img/uptown-buildings.png";
import imgdonut from "../img/uptown-donut.png";
import imgdonutarrow from "../img/uptown-donut-arrow-small.png";
import * as loader from "./helper/htmlLoader";

// when page load for the first time go to intro
window.onload = () => {
    loader.getPage("intro");
};

// get html page based off the nav buttons
const menuItems = ["nav-menu"];
menuItems.forEach((cur) => {
    document.getElementById(cur).addEventListener("click", (e) => {
        loader.getPage("menu");      
    });
});
