import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../modules/user';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user = {} as User;
  
  constructor(
    private afauth: AngularFireAuth,
    public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  
  async signup(user: User) {
    try {
   const result =  this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
   if (result){
    this.navCtrl.setRoot(LoginPage);
  }
   console.log(result);
  }
  catch(e) {
    console.error(e);
  }
 }
}
