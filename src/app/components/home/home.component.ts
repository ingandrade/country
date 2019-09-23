import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { CountryInterface } from '../../models/country-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private countrys: CountryInterface;
  filterCountry = '';
  pageActual: number = 1;

  ngOnInit() {
    this.getListCountry();
  }

  getListCountry(){
    this.dataApi.getAllCountry()
    .subscribe((countrys: CountryInterface )=>(this.countrys = countrys ));
  }

  destroy(dat){
    console.log(dat);
  }

}
