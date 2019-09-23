import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router'
import { CountryInterface } from 'src/app/models/country-interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  private country: CountryInterface = {
    name: "",
    topLevelDomain: "",
    alpha2Code: "",
    alpha3Code: "",
    callingCodes: "",
    capital: "",
    region: "",
    subregion: "",
    demonym: "",
    flag: "",
  }

  ngOnInit() {
    const country_name = this.route.snapshot.params['name'];
    this.getDetails(country_name);
  }

  getDetails(name: string){
    this.dataApi.getCountyByName(name)
    .subscribe(country => (this.country = country) );
  }

}
