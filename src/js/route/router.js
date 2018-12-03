import Axios from "axios";

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

    async goToRoute(scope, name) {
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
        let origin = window.location.protocol + "//" + window.location.host;
        let url = `${origin}/views/_${name}.html`;        
        console.log(url);
        try {
            const res = await Axios(url);   
            scope.root.innerHTML = res.data;         
        } catch (err) {
            console.log(err);
        }
    }
}

  

