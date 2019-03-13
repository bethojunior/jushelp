import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificacaoPage } from '../notificacao/notificacao';

@Component({
  selector: 'page-notificacoes',
  templateUrl: 'notificacoes.html'
})
export class NotificacoesPage {

  dados = [];

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      for (let index = 0; index < 30; index++) {
        let data = new Date();
        data.setDate(data.getDate() + index);
        this.dados.push({
          id: index,
          titulo: 'Notificação N° ' + (index + 1),
          mensagem: [
            'Quis aliqua culpa fugiat qui voluptate cupidatat ullamco mollit duis culpa tempor. Ullamco ipsum laborum esse consectetur sint irure cupidatat ut consequat aute minim cillum. Tempor et voluptate ex fugiat in pariatur occaecat irure reprehenderit cupidatat nostrud Lorem eiusmod. Mollit ex nisi sunt sit laboris exercitation consectetur consectetur. Adipisicing Lorem anim ex esse ut incididunt. Tempor eiusmod sit laborum fugiat magna aliqua Lorem in. Officia sint pariatur Lorem dolore aliqua dolore et excepteur ad in ea ad ullamco ullamco.',
            'Eiusmod esse irure non ut occaecat. Ex aliqua pariatur nulla enim duis sit irure qui. Enim exercitation dolore ea do tempor proident in nostrud. Adipisicing sit ullamco eiusmod ut.',
            'Cillum est irure ex magna sunt sit occaecat nostrud do sunt fugiat. Culpa laborum irure adipisicing nisi. Ullamco aliquip ut non sunt non et nulla tempor dolore nulla ullamco. Nostrud officia sunt exercitation sunt. Fugiat tempor ea dolore reprehenderit consequat ea. Tempor irure id consequat amet sunt et dolor et proident tempor et non consequat.',
            'Dolore dolor ea cupidatat incididunt mollit do dolore mollit proident minim proident ad veniam eiusmod. In quis velit dolor pariatur proident in ut. Magna quis ut anim anim commodo nisi qui incididunt mollit nostrud est elit.',
            'Quis aliqua culpa fugiat qui voluptate cupidatat ullamco mollit duis culpa tempor. Ullamco ipsum laborum esse consectetur sint irure cupidatat ut consequat aute minim cillum. Tempor et voluptate ex fugiat in pariatur occaecat irure reprehenderit cupidatat nostrud Lorem eiusmod. Mollit ex nisi sunt sit laboris exercitation consectetur consectetur. Adipisicing Lorem anim ex esse ut incididunt. Tempor eiusmod sit laborum fugiat magna aliqua Lorem in. Officia sint pariatur Lorem dolore aliqua dolore et excepteur ad in ea ad ullamco ullamco.',
            'Eiusmod esse irure non ut occaecat. Ex aliqua pariatur nulla enim duis sit irure qui. Enim exercitation dolore ea do tempor proident in nostrud. Adipisicing sit ullamco eiusmod ut.',
            'Cillum est irure ex magna sunt sit occaecat nostrud do sunt fugiat. Culpa laborum irure adipisicing nisi. Ullamco aliquip ut non sunt non et nulla tempor dolore nulla ullamco. Nostrud officia sunt exercitation sunt. Fugiat tempor ea dolore reprehenderit consequat ea. Tempor irure id consequat amet sunt et dolor et proident tempor et non consequat.',
            'Dolore dolor ea cupidatat incididunt mollit do dolore mollit proident minim proident ad veniam eiusmod. In quis velit dolor pariatur proident in ut. Magna quis ut anim anim commodo nisi qui incididunt mollit nostrud est elit.'
          ].join(' '),
          data: data.toLocaleString(),
          lido: false
        });
      }
    }, 2000);
  }

  /**
   * lerNotificacao
   */
  public lerNotificacao(notificacao: any) {
    this.navCtrl.push(NotificacaoPage, {
      notificacao: notificacao
    });
  }

}
