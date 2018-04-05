import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstPage } from './first';

@NgModule({
  declarations: [
    FirstPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstPage),
  ],

  entryComponents: [
    FirstPage
  ]
})
export class FirstPageModule {}
