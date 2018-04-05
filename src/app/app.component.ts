import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TermsPage } from '../pages/terms/terms';
import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { CartPage } from '../pages/cart/cart';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { WelcomePage } from '../pages/welcome/welcome';
import { ShoppingPage } from '../pages/shopping/shopping';
import { PaymentPage } from '../pages/payment/payment';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Contact us', component: ContactPage },
      { title: 'Ts And Cs', component: TermsPage },
      { title: 'Logout', component: LoginPage },
      { title: 'My Account', component: ProfilePage },
      { title: 'Add to cart', component: CartPage },
      { title: 'Vehicle', component: VehiclePage },
      { title: 'Shopping', component: ShoppingPage },
      { title: 'payment', component: PaymentPage }
      
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
   
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
 
  }
}
