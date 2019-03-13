import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { IntroPage } from '../intro/intro';
import { AlterarNumeroPage } from '../modals/alterar-numero/alterar-numero';
import { AlterarEmailPage } from '../modals/alterar-email/alterar-email';
import { AlterarDadosPessoaisPage } from '../modals/alterar-dados-pessoais/alterar-dados-pessoais';
import { AlterarEnderecoPage } from '../modals/alterar-endereco/alterar-endereco';
import { AlterarSenhaPage } from '../modals/alterar-senha/alterar-senha';
import { AlterarNotificacoesPage } from '../modals/alterar-notificacoes/alterar-notificacoes';
import { PrivacidadePage } from '../modals/privacidade/privacidade';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider,
    private modalController: ModalController) {
    this.userData = this.auth.getUser();
  }

  /**
   * logout
   */
  public logout() {
    this.auth.logout().subscribe(() => {
      this.auth.destroyUser();
      this.navCtrl.parent.parent.setRoot(IntroPage);
    });
  }

  /**
   * abrirModal
   */
  public abrirModal(kind) {
    let modal;
    if( kind == 'numero') {
      modal = this.modalController.create(AlterarNumeroPage);
    }

    if( kind == 'email') {
      modal = this.modalController.create(AlterarEmailPage);
    }

    if( kind == 'dados_pessoais') {
      modal = this.modalController.create(AlterarDadosPessoaisPage);
    }

    if( kind == 'endereco') {
      modal = this.modalController.create(AlterarEnderecoPage);
    }

    if( kind == 'senha') {
      modal = this.modalController.create(AlterarSenhaPage);
    }

    if (kind == 'notificacoes') {
      modal = this.modalController.create(AlterarNotificacoesPage);
    }

    if (kind == 'privacidade') {
      modal = this.modalController.create(PrivacidadePage);
    }

    modal.onDidDismiss(() => {
      this.userData = this.auth.getUser();
    });

    modal.present();
  }

}
