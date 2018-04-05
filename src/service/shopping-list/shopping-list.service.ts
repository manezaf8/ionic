import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../modules/shopping-items.interface';


@Injectable()
export class ShoppingListservice  {
    private ShoppingListRef = this.db.list<Item>
    ('shopping-list');

    constructor(private db: AngularFireDatabase){

    }
    getShoppingList(){
        return this.ShoppingListRef;
    }
    addItem(Item: Item) {
        return this.ShoppingListRef.push(Item);
    }
    editItem(item: Item) {
        return this.ShoppingListRef.update(item.key, item);

    }

    removeItem(item: Item) {
     return this.ShoppingListRef.remove(item.key);
    }
}