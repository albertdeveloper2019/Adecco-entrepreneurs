import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private url: string;

  constructor(private httpClient: HttpClient) { 
     this.url = environment.urApiRest;
  }// constructor

  getCurrency(){
    // return this.httpClient.get(this.url);
    return this.httpClient.get(this.url).pipe(
      map((data: any) => {
         console.log(data);
         return data;
      }));
  }// getCurrency
  
}// ApiRestService
