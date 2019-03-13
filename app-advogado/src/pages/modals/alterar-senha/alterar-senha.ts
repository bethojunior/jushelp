import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alterar-senha',
  templateUrl: 'alterar-senha.html',
})
export class AlterarSenhaPage {

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
