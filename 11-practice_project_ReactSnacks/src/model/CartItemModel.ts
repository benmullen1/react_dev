import MenuItemModel from "./MenuItemModel";

class CartItemModel extends MenuItemModel {
    //id:string;
    //name:string;
    //price:number;
    //iconPath:string;
    amount:number;
    updateTime?:Date;

    constructor(name:string, price:number, iconPath:string, id?:string, amount?:number, updateTime?:Date ){
        super(name, price, iconPath, id);
        this.amount = (amount? amount: 1);
        this.updateTime = (updateTime? updateTime: new Date(Date.now()));
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

export default CartItemModel;