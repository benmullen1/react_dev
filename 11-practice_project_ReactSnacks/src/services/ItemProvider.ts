import MenuItemModel from "../model/MenuItemModel";

class ItemProvider{

    static getMenuItems(){
        //perform service lookups and such
        //pretend we are making SOA calls or whatever
        return [
            new MenuItemModel('Taco', 12.23, "/images/icons/taco.png", "1"),
            new MenuItemModel('Kebab', 11.45, "/images/icons/kebab.png", "2"),
            new MenuItemModel('French Fries', 6.10, "/images/icons/french-fries.png", "3")
          ];
    }

}export default ItemProvider;