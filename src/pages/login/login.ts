import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../modules/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    user = {} as User;
    formgroup: FormGroup;
    emai: AbstractControl;
    password: AbstractControl;

  
  constructor(
    private afauth: AngularFireAuth,
    public navCtrl: NavController,
    public formbuilder: FormBuilder) {
      this.formgroup = formbuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
          
      });
      this.emai =this.formgroup.controls['email'];
      this.password =this.formgroup.controls['password'];
      
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

   login(user: User) {
    try {
   const result =  this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
   if (result){
     this.navCtrl.setRoot(HomePage);
   }
   console.log(result);
  }
  catch(e) {
    console.error(e);
   }
  } 
}
