import { Component } from '@angular/core';
import { NavController, AlertController, Events, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { RegistrarPage } from '../registrar/registrar';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public credentials = {
    email: '',
    senha: ''
  }

  public content;

  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public auth: AuthProvider,
    public events: Events,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    events.subscribe('user:forceLogout', () => {
      this.auth.destroyUser();
      this.auth.destroySession();
      this.navCtrl.goToRoot({});
    });
  }

  ionViewDidLoad() {
    this.content = document.getElementsByClassName('login-bg')[0];
  }

  scrollLoginContentTop(tipo) {
    // let loginInput = document.getElementById('loginInput');
    // let passwordInput = document.getElementById('passwordInput');
    setTimeout(() => {
      this.content.scrollTop = 600;
      // if (tipo == 'login') {
      //   loginInput.click();
      // } else {
      //   passwordInput.click();
      // }
    }, 500);
  }

  gotoRegistrar() {
    this.navCtrl.push(RegistrarPage);
  }

  public login() {
    let loading = this.loadingCtrl.create({
      content: 'Entrando, por favor aguarde...'
    });

    loading.present();

    // Realizando login com os dados digitados
    this.auth.login(this.credentials)
      .subscribe(
        dados => {
          this.auth.setUser(dados);
          loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
        },
        error => {
          loading.dismiss();
          const toast = this.toastCtrl.create({
            message: error && error.error.msg || "Resposta não localizada",
            duration: 4000
          });
          toast.present();
        }
      );
  }
}
