import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  HttpService } from '../../services/http.service';

@Component({
    selector: 'app-subDistrict',
    templateUrl: './subDistrict.component.html',
    styleUrls: ['./subDistrict.component.scss']
  })


export class SubDistrictComponent implements OnInit {

    subDistrictData = {
        name: "aasdasd",
        information: "asdasd",
        cod: "asdasd"
    }

    classificationList: any = [];
    subDistrictId: any;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(){ 
        this.subDistrictId = this.route.snapshot.paramMap.get("id");
        this.httpService.getByPrevious("api", this.subDistrictId, "clasification").subscribe(response => {
         this.classificationList = response;
        })

        this.httpService.getById("api/subDistrict", this.subDistrictId).subscribe((response: any) => {
            this.subDistrictData = response;
        })
    }

    viewClassification(id: any){
        this.router.navigateByUrl("/clasification/" + id);
    }


    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
}