import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  HttpService } from '../../services/http.service';

@Component({
    selector: 'app-clasification',
    templateUrl: './clasification.component.html',
    styleUrls: ['./clasification.component.scss']
  })


export class ClasificationComponent implements OnInit {

    classificationData = {
        name: "aasdasd",
        information: "asdasd",
    }

    subClassificationList: any = [];
    classificationId: any;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }
    
    ngOnInit(){
        this.classificationId = this.route.snapshot.paramMap.get("id");
        this.httpService.getByPrevious("api", this.classificationId, "subClasification").subscribe(response => {
         this.subClassificationList = response;
        })

        this.httpService.getById("api/clasification", this.classificationId).subscribe((response: any) => {
            this.classificationData = response;
        })
    }

    viewSubClassification(id: any){
        this.router.navigateByUrl("/subClasification/" + id);
    }

    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
}