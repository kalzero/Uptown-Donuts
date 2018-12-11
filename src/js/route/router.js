import Axios from "axios";
import { create } from "domain";

export default class Router {

    constructor(routes) {
        this.routes = routes;
        this.root = document.getElementById("app");
    }

    init() {                        
        let r = this.routes;
        window.addEventListener("hashchange", () => {
            this.routeChanged(this, r);
        });      
        this.routeChanged(this, r);
    };

    routeChanged(scope, routes) {        
        // checks to see if any of the menu buttons were clicked and then change route
        if (window.location.hash.length > 0) {
            routes.forEach((route) => {
                if (route.getCurrentRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(this, route.name);
                }
            });
        } else {
            routes.forEach((route) => {
                if (route.isDefault) {
                    scope.goToRoute(this, route.name);
                }
            })
        }
    };

    goToRoute(scope, name) {
        //let cors_api_url = "http://cors-anywhere.herokuapp.com/";
        //let origin = window.location.protocol + "//" + window.location.host;
        //xhr.open('GET', `${cors_api_url}${origin}/views/_${name}.html`, true);        
        
        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', `/views/_${name}.html`, true);
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        // xhr.send();
    
        // xhr.onreadystatechange = function() {                
        //     if (this.readyState !== 4) return;
        //     if (this.status !== 200) return;            
        //     scope.root.innerHTML = this.responseText;            
        // };

        // try {
        //     const res = await Axios(url);   
        //     scope.root.innerHTML = res.data;      
        //     console.log("success: " + scope.root.innerHTML);
        // } catch (err) {
        //     console.log("error" + err);
        // }


        let origin = window.location.protocol + "//" + window.location.host;
        let url = `${origin}/views/_${name}.html`;        
        console.log(url);
        const createCORSRequest = (method, url) => {
            let xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method.url);
            } else {
                xhr = null;
            }
            return xhr;
        }

        const xhr = createCORSRequest("GET", url);
        if (!xhr) {
            throw new Error("CORS not supported");
        }

        xhr.onload = () => {
            let responseText = xhr.responseText;
            scope.root.innerHTML = responseText; 
        }

        xhr.onerror = (err) => {
            console.log(err);
        }

        xhr.withCredentials = true;
        xhr.send();

       
    }
}

  

