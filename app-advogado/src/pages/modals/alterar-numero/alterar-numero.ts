import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-alterar-numero',
  templateUrl: 'alterar-numero.html',
})
export class AlterarNumeroPage {
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
