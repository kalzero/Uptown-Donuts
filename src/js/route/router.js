
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
        
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `dist/views/_${name}.html`, true);
        xhr.send();
    
        xhr.onreadystatechange = function() {                
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;            
            scope.root.innerHTML = this.responseText;            
        };
    }
}

  

