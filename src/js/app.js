import "../css/main.scss";
import Route from "./route/route";
import Router from "./route/router";
// load every image needed
const requireContext = require.context("../img", true, /^\.\/.*\.png$/);
requireContext.keys().map(requireContext);


// Load all routes
// const routes = [
//     new Route("home", "_home.html", true),
//     new Route("menu", "_menu.html")
// ]; 

// Register Routes to load
// const router = new Router(routes);
// router.init();
