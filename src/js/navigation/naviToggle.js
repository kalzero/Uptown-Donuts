
export default class NaviToggle {

    constructor() {    
        this.close = true;  
    }

    toggleHandler(e) {
        this.close = !this.close;
        
        if (this.close) {
            document.getElementById("side-nav").classList.add("close");   
            document.getElementById("side-nav").classList.remove("open");            
        } else {
            document.getElementById("side-nav").classList.add("open");                        
            document.getElementById("side-nav").classList.remove("close");            
        }
    };      
}