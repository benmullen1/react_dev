class MenuItemModel {
    id:string;
    name:string;
    price:number;
    iconPath:string;

    constructor(name:string, price:number, iconPath:string, id?:string ){
        if (id){
            this.id = id;
        }else{
            this.id = this.generateid();
        }        
        this.name = name;
        this.price = price;
        this.iconPath = iconPath;
    }

    toString():string{
        return  "id: '" + this.id + "',`" + 
                "name: '" + this.name + "',`" +
                "price: '" + this.price + "',`" +
                "iconPath: '" + this.iconPath + "''";
    }

    generateid():string{
        return performance.now() + Math.random().toString().slice(5).replace('.','');
    }


}

export default MenuItemModel;