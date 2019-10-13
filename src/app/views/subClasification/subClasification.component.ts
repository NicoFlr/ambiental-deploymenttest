import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import {  HttpService } from '../../services/http.service';

@Component({
    selector: 'app-subClasification',
    templateUrl: './subClasification.component.html',
    styleUrls: ['./subClasification.component.scss']
  })


export class SubClasificationComponent implements OnInit {

    subClassificationData = {
        name: "aasdasd",
        information: "asdasd",
    }

    locationTreeList: any = [];
    subClassificationId: any;


    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.subClassificationId = this.route.snapshot.paramMap.get("id");
        this.httpService.getByPrevious("api", this.subClassificationId, "locationTree").subscribe(response => {
         this.locationTreeList = response;
        })

        this.httpService.getById("api/subClasification", this.subClassificationId).subscribe((response: any) => {
            this.subClassificationData = response;
        })
    }

    viewDivision(id: any){
        this.router.navigateByUrl("/division/" + id);
    }
    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
}