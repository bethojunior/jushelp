import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-alterar-email',
  templateUrl: 'alterar-email.html',
})
export class AlterarEmailPage {
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
