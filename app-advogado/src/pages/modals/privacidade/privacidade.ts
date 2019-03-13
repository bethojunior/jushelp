import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-privacidade',
  templateUrl: 'privacidade.html',
})
export class PrivacidadePage {

  constructor(public navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacidadePage');
  }

  /**
   * close
   */
  public close() {
    this.view.dismiss();
  }

}
