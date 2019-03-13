import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alterar-notificacoes',
  templateUrl: 'alterar-notificacoes.html',
})
export class AlterarNotificacoesPage {
  constructor(
    public navParams: NavParams,
    private view: ViewController) {
  }

  /**
   * close
   */
  public close() {
    this.view.dismiss();
  }

}
