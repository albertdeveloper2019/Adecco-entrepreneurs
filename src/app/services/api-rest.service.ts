import {Injectable} from '@angular/core';
import {HttpClient} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private httpClient: HttpClient) { 
    

  }// constructor
  
}// ApiRestService
