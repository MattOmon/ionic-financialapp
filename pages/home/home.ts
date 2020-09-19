import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],

})
export class HomePage {
  GadgetPrice: number;
  OldPhoneAppraisedValue: number;
  PaymentTerms: number;

  constructor(public navCtrl: NavController) {
  }
compute() {
  this.OldPhoneAppraisedValue = (this.OldPhoneAppraisedValue * 1);
  this.FinancedAmount = (this.GadgetPrice-this.OldPhoneAppraisedValue);
  this.TotalInterestPayable = (this.FinancedAmount * 1.30 / 100) * 12;
  this.MonthlyPayment = (this.FinancedAmount + this.TotalInterestPayable) / 12; 
  }
}
