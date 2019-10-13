import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  HttpService } from '../../services/http.service';

@Component({
    selector: 'app-division',
    templateUrl: './division.component.html',
    styleUrls: ['./division.component.scss']
  })


export class DivisionComponent implements OnInit {

    locationTreeData = {
        name: "aasdasd",
        information: "asdasd",
    }

    locationTreeId: any;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }
    
    ngOnInit() {
        this.locationTreeId = this.route.snapshot.paramMap.get("id");
        this.httpService.getById("api/locationTree", this.locationTreeId).subscribe((response: any) => {
            this.locationTreeData = response;
        })
    }

    viewGreenAreas(){
        this.locationTreeId = this.route.snapshot.paramMap.get("id");
        this.router.navigateByUrl("/locationTree/" + this.locationTreeId);
    }

    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
}