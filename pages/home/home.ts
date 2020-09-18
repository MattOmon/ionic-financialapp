import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],

})
export class HomePage {
  initValue: number;
  depValue: number;

  constructor(public navCtrl: NavController) {
  }

compute() {
  this.depValue = (this.initValue * 0.40);
}
}
