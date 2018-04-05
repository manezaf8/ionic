import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../modules/shopping-items.interface';

import { ShoppingListservice } from '../../service/shopping-list/shopping-list.service';
import { ShoppingPage } from '../shopping/shopping';
import { ToastService } from '../../service/toast/toast.service';
 
@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
   //Creating a new object for shopping
 item: Item = {
   name: '',
   quantity: undefined,
   price: undefined
 }
  


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private shopping: ShoppingListservice,
    private toast: ToastService
  ) 
  
  {
   
   
  }

  addItem(item: Item) {
    this.shopping.addItem(item).then(ref =>{
      this.toast.show(`${item.name} Added!`);
      this.navCtrl.setRoot( ShoppingPage, {key: ref.key});
    })
  }
}
