import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  HttpService } from '../../services/http.service';

@Component({
    selector: 'app-locationTree',
    templateUrl: './locationTree.component.html',
    styleUrls: ['./locationTree.component.scss']
  })


export class LocationTreeComponent implements OnInit {

    locationTreeData = {
        name: "aasdasd",
        information: "asdasd",
    }

    treeList: any = [];

    locationTreeId: any;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }
    
    ngOnInit() {
        this.locationTreeId = this.route.snapshot.paramMap.get("id");
        this.httpService.getByPrevious("api", this.locationTreeId, "tree").subscribe(response => {
         this.treeList = response;
        })

        this.httpService.getById("api/locationTree", this.locationTreeId).subscribe((response: any) => {
            this.locationTreeData = response;
        })
    }
    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
}