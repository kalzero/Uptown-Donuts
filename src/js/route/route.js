
export default class Route {

    constructor(name, htmlName, isDefault) {
        this.name = name;
        this.htmlName = htmlName;
        this.isDefault = isDefault;
    }

    getCurrentRoute(hashedPath) {          
        return hashedPath.replace("#", '') === this.name;
    }
}