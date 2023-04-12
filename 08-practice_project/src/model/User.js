class User {

    name;
    age;
    identifier;
 
    constructor(name, age, identifier){
        this.name = (!name) ? "": name;
        this.age = age;
        this.identifier = (!identifier) ? this.generateid(): identifier;
    }

    toString(){
        return "Name: " + this.name + " Age: " + this.age + " ID: " + this.identifier;
    }

    generateid(){
        return performance.now() + Math.random().toString().slice(5).replace('.','');
    }

}

export default User;