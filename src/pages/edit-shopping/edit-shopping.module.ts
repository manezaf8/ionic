import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditShoppingPage } from './edit-shopping';

@NgModule({
  declarations: [
    EditShoppingPage,
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingPage),
  ],

  entryComponents: [
    EditShoppingPage
  ]
})
export class EditShoppingPageModule {}
