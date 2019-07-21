import {Component, OnInit} from '@angular/core';
import {ApiRestService} from '../../services/api-rest.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public dataEuro: number; 
  public dataDollar: number;
  public valueUSD: number;
  public idleTime: number;
  public reloj: any;

  constructor(public instService: ApiRestService) {
    this.consumeService();
    this.idleTime = 0;
    this.reloj = setInterval(() => { this.temporizador(); }, 600000); // 10 minute
   // this.valueUSD = 1.34;
  }// constructor

  ngOnInit() {
  }// ngOnInit

  consumeService(){
     this.instService.getCurrency().subscribe(data => {
     this.valueUSD = data.rates['USD'];
     console.log("monedas",data.rates['USD']);
     });
    
  }// consumeService

  makeCalculate(){
     this.dataDollar =  this.valueUSD * this.dataEuro;

  }//makeCalculate

  temporizador() {
    this.idleTime = this.idleTime + 1;
    // Cuando el temporizador alcanza los 10 minutos se llama de nuevo el servicio
    if (this.idleTime >= 10) { // 10 minutes
      this.consumeService();
    }
  }// temporizador


}// LandingComponent
