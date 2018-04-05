import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingListservice } from '../../service/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/observable';
import { Item } from '../../modules/shopping-items.interface';


@Component({
  selector: 'page-shopping',
  templateUrl: 'shopping.html',
})
export class ShoppingPage {

  shoppingList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase,
     private shopping: ShoppingListservice
    ){
   this.shoppingList$ = this.shopping
   .getShoppingList()
   .snapshotChanges()
   .map(
     changes => {
       return changes.map(c => ({
         key: c.payload.key, ...c.payload.val()
       }));
     });
  }
 
}
