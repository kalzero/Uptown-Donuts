
export const getPage = (pageName) => {    
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `dist/pages/_${pageName}.html`, true);
    xhr.send();

    xhr.onreadystatechange = function() {    
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        let response = this.responseText;
        document.getElementById("app").innerHTML = response;
    };
    
}
        
    

