import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-district',
    templateUrl: './district.component.html',
    styleUrls: ['./district.component.scss']
  })


export class DistrictComponent implements OnInit {

    districtData = {
        name: "aasdasd",
        information: "asdasd"
    }

    subDistrictList: any = [];
    districtId: any;

    constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        this.districtId = this.route.snapshot.paramMap.get("id");
        this.httpService.getByPrevious("api", this.districtId, "subDistrict").subscribe(response => {
         this.subDistrictList = response;
        })

        this.httpService.getById("api/district", this.districtId).subscribe((response: any) => {
            this.districtData = response;
        })
    }

    viewSubDistrict(id: any){
        this.router.navigateByUrl("/subDistrict/" + id);
    }
    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
}