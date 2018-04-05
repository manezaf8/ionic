import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';

import { Profile } from '../../modules/profile';
import { WelcomePage } from '../welcome/welcome';
import { User } from '@firebase/auth-types';
import { AddShoppingPage } from '../add-shopping/add-shopping';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 

  profileData: AngularFireObject <Profile>;
  user = {} as User;

  constructor(
    
    private afauth: AngularFireAuth, 
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    public navCtrl: NavController,
     public navParams: NavParams) {

  }
   
  navigateToAddshoppingPage(params){
    if (!params) params = {};
    this.navCtrl.push(AddShoppingPage);
  }
  
  signOut(user: User){ 
    this.afauth.auth.signOut().then(res => 
      { this.navCtrl.setRoot(WelcomePage); 
    }); 
  }
  
  ionViewDidLoad() {
    this.afauth.authState.subscribe(data => {
      if(data.email && data.uid){
      this.toast.create({
        message: 'Welcome to sMugg, ${data.email}',  
        duration: 3000
      }).present();
      this.profileData = this.afDatabase.object(`profile/${data.uid}`);

   }
 
  else {
    this.toast.create({
      message: 'Sorry please provide correct email; and pasword',
      duration: 3000
      }).present();

    }
  })
 }

} 
