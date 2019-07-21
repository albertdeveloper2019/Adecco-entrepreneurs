import {Component, OnInit} from '@angular/core';
import {ApiRestService} from '../../services/api-rest.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public instService: ApiRestService) {
    this.consumeService();
  }// constructor

  ngOnInit() {
  }// ngOnInit

  consumeService(){
     this.instService.getCurrency().subscribe(data => {
     console.log("monedas",data.rates['USD']);
     
    });
    
  }// consumeService

}// LandingComponent
