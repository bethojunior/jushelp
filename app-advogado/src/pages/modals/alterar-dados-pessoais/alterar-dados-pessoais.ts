import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-alterar-dados-pessoais',
  templateUrl: 'alterar-dados-pessoais.html',
})
export class AlterarDadosPessoaisPage {
  constructor(public navParams: NavParams, private view: ViewController) {
  }

  /**
  * close
  */
  public close() {
    this.view.dismiss();
  }

}
