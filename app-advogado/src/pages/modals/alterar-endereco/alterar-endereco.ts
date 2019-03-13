import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-alterar-endereco',
  templateUrl: 'alterar-endereco.html',
})
export class AlterarEnderecoPage {
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
