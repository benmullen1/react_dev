import CartItemModel from "./CartItemModel";
import MenuItemModel from "./MenuItemModel";


class CartModel{
    items:Array<CartItemModel> = new Array<CartItemModel>();
    lastUpdateTime?:Date = new Date(Date.now());

    constructor(items:Array<CartItemModel>){
        this.items = items;
    }

    addOrUpdateCartItem(item:MenuItemModel, amount:number){

        let listIndex:number = this.items.findIndex(listItem => listItem.id === item.id);
        if (listIndex>-1){
            this.items[listIndex].amount += amount;
            this.items[listIndex].updateTime = new Date(Date.now());
            if (this.items[listIndex].amount <=0){
                console.log("Removed Item " + this.items[listIndex].name + " because amount was " + this.items[listIndex].amount);
                this.items.splice(listIndex, 1);
            }
        }
        else{
            this.items.push(new CartItemModel(item.name, item.price, item.iconPath, item.id, amount, new Date(Date.now())));
        }
        console.log("Added item " + item.toString())
        
    }

    removeCartItem(item:MenuItemModel){
        let listIndex:number = this.items.findIndex(listItem => listItem.id === item.id);
        if (listIndex>0){
            this.items.splice(listIndex, 1);
        }
        else{
            console.log("no item of that type to remove");
        }
    }

    getCartTotal(){
        let total:number = 0;
        if (this.items.length >0){
            this.items.forEach((item)=>{
                total += (item.amount * item.price);
            })
        }
        return total;
    }

    
} export default CartModel;