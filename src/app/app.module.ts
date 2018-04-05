import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FormsModule} from '@angular/forms';
import { WelcomePage } from '../pages/welcome/welcome';
import { CartPage } from '../pages/cart/cart';
import { FirstPage } from '../pages/first/first';
import { ProfilePage } from '../pages/profile/profile';
import { ShoppingPage } from '../pages/shopping/shopping';
import { TermsPage } from '../pages/terms/terms';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { PaymentPage } from '../pages/payment/payment';
import { ShoppingListservice } from '../service/shopping-list/shopping-list.service';
import { ToastService } from '../service/toast/toast.service';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ContactPage,
    WelcomePage,
    CartPage,
    ContactPage,
    FirstPage,
    ProfilePage,
    ShoppingPage,
    TermsPage,
    TermsPage,
    VehiclePage,
    PaymentPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ContactPage,
    WelcomePage,
    CartPage,
    ContactPage,
    FirstPage,
    ProfilePage,
    ShoppingPage,
    TermsPage,
    TermsPage,
    VehiclePage,
    PaymentPage,
    HomePage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide:  ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ShoppingListservice,
    ToastService
  ]
})
export class AppModule {
  
}