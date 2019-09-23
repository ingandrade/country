import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }

  getAllCountry(){
    const url_api = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url_api);
  }

  getCountyByName(name: string){
    const url_api =  `https://restcountries.eu/rest/v2/name/${name}`;
    return this.http.get(url_api);
  }
}
