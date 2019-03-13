import { RelatoInfoPage } from './../modals/relato-info/relato-info';
import { ToastController, ModalController } from 'ionic-angular';
import { AdvogadoProvider } from './../../providers/advogado/advogado';
import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-relatos',
  templateUrl: 'relatos.html'
})
export class RelatosPage {
  data :any[] = [];

  constructor(
    private auth: AuthProvider,
    private advService: AdvogadoProvider,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
    this.loadItens();
  }

  loadItens() {
    this.data = [];
    for (let index = 0; index < 10; index++) {
      let especialidadeNome = 'Não sei';
      if (index == 3) {
        especialidadeNome = 'Trabalhista';
      }
      if (index == 6) {
        especialidadeNome = 'Bancos';
      }

      this.data.push({
        cliente: '3depmfrmgpvorpigrpop',
        advogado: 'drknnfkrmglkrmkrmlkgmm',
        relato: {
          _id: 'pelmfmpkrmlr,kfmrmpofkopo',
          cliente: '3depmfrmgpvorpigrpop',
          texto: 'Relato de teste',
          url_audio: null,
          especialidade: {
            _id: 'lkejnpljhfóeonf',
            nome: especialidadeNome
          },
          estado: 'Pendente'
        }
      });
    }

    // return;
    // this.advService.buscarRelatos(this.auth.getUser()._id)
    //   .subscribe(
    //     dados => {
    //       this.data = dados as any[];
    //     },
    //     error => {
    //       const toast = this.toastCtrl.create({
    //         message: error && error.error.msg || "Resposta não localizada",
    //         duration: 4000
    //       });
    //       toast.present();
    //     }
    //   );
  }

  abrirRelato(relato) {
    const modal = this.modalCtrl.create(RelatoInfoPage, {
      relato: relato
    });

    modal.onDidDismiss(() => {
      this.loadItens();
    });

    modal.present();
  }
}
