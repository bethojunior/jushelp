import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notificacao',
  templateUrl: 'notificacao.html'
})
export class NotificacaoPage {

  notificacao: any;

  constructor(public navParams: NavParams) {
    this.notificacao = navParams.get('notificacao');
  }
}
