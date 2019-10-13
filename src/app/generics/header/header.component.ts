import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service'
import { AfterContentInit, AfterViewInit, ElementRef, QueryList, EventEmitter } from '@angular/core';
import { localStorageAccess } from '../../lib/localStorageAccess';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
  })

export class HeaderComponent implements OnInit{
    public navBarSubscription: Subscription;
    public isLogged : boolean = false;

    constructor(private router: Router, private userService : UserService) {
        if (this.navBarSubscription)
        this.navBarSubscription.unsubscribe();
        this.navBarSubscription = this.userService.availableTabs.subscribe((item: any) => {
            console.log("this",this.isLogged)
            this.isLogged = true;
        });
       
    }
    
    ngOnInit() {
        this.initalizeVariables();
        //this.initalizeVariables();
        //throw new Error("Method not implemented.");
    }

    initalizeVariables(){
        if(!localStorageAccess.getObject("UserLogged"))
            this.isLogged = false;   
        else
            this.isLogged = true;
    }

    redirecTo(value:any){
        this.router.navigateByUrl(value);
    }
    
    logout(){
        localStorageAccess.deleteObject("UserLogged");
        this.router.navigateByUrl("/login");
    }
}