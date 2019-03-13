import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrarPage } from '../registrar/registrar';


@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  constructor(public navCtrl: NavController) { }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  gotoRegistrar() {
    this.navCtrl.push(RegistrarPage);
  }
}
