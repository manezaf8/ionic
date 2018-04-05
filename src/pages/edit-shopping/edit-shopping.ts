import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../modules/shopping-items.interface';
import { ShoppingListservice } from '../../service/shopping-list/shopping-list.service';
import { ShoppingPage } from '../shopping/shopping';
import { ToastService } from '../../service/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-shopping',
  templateUrl: 'edit-shopping.html',
})
export class EditShoppingPage {

  item: Item;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    private shopping: ShoppingListservice,
    private toast: ToastService
     ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  saveItem(item: Item){
     this.shopping.editItem(item).then(() => {
       this.toast.show(`${item.name} Updated!`);
    this.navCtrl.setRoot(ShoppingPage);
     });
  }

  removeItem(item: Item){
    this.shopping.removeItem(item)
    .then(() => {
      this.toast.show(`${item.name} Deleted Succefully!` );
      this.navCtrl.setRoot(ShoppingPage);
    })
  }

}
