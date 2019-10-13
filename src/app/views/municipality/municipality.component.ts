import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-municipality',
    templateUrl: './municipality.component.html',
    styleUrls: ['./municipality.component.scss']
  })


export class MunicipalityComponent implements OnInit {

    districtList: any = [];

    constructor(private httpService: HttpService, private router: Router) { }

    ngOnInit() {
        this.httpService.get("api/district").subscribe(response => {
            this.districtList = response;
        });
    }

    viewDistrict(id: any){
        this.router.navigateByUrl("/district/" + id);
    }
}