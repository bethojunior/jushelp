import { AudioProvider } from './../../../providers/AudioProvider';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'page-relato-info',
  templateUrl: 'relato-info.html',
})
export class RelatoInfoPage {
  relato: any;
  constructor(
    public navParams: NavParams,
    private view: ViewController,
    private audio: AudioProvider) {
      this.relato = navParams.get('relato');
  }

  /**
   * close
   */
  public close() {
    this.view.dismiss();
  }

  playAudio() {
    this.audio.playStream('../../../assets/audios/Focus_GLB_1_MP3_001.mp3');
    this.audio.play();
    // this.nativeAudio.preloadSimple('audio', '../../../assets/audios/Focus_GLB_1_MP3_001.mp3').then(() => {
    //   this.nativeAudio.play('audio');
    // })
  }
}
