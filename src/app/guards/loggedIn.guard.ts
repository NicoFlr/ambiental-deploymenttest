import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { localStorageAccess } from '../lib/localStorageAccess';

@Injectable()
export class AuthAccountGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorageAccess.getObject('UserLogged')) {
            console.log("true",localStorageAccess.getObject("UserLogged"));
            return true;
        }
        this.router.navigateByUrl('/home');
        return false;
    }
}