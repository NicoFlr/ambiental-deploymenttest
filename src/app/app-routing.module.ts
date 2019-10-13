import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MunicipalityComponent } from './views/municipality/municipality.component';
import { DistrictComponent } from './views/district/district.component';
import { SubDistrictComponent } from './views/subDistrict/subDistrict.component';
import { ClasificationComponent } from './views/clasification/clasification.component';
import { SubClasificationComponent } from './views/subClasification/subClasification.component';
import { DivisionComponent } from './views/division/division.component';
import { LocationTreeComponent } from './views/locationTree/locationTree.component';
import { LoginComponent } from './views/login/login.component';
import { CreateUserComponent } from './views/createUser/createUser.component';
import { AuthAccountGuard } from './guards/loggedIn.guard'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full', canActivate: [] },
  { path: 'home', component: HomeComponent, canActivate: [] },
  { path: 'municipality', component: MunicipalityComponent, canActivate: [AuthAccountGuard] },
  { path: 'district/:id', component: DistrictComponent, canActivate: [AuthAccountGuard] },
  { path: 'subDistrict/:id', component: SubDistrictComponent, canActivate: [AuthAccountGuard] },
  { path: 'clasification/:id', component: ClasificationComponent, canActivate: [AuthAccountGuard] },
  { path: 'subClasification/:id', component: SubClasificationComponent, canActivate: [AuthAccountGuard] },
  { path: 'division/:id', component: DivisionComponent, canActivate: [AuthAccountGuard] },
  { path: 'locationTree/:id', component: LocationTreeComponent, canActivate: [AuthAccountGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'user/new', component: CreateUserComponent, canActivate: [] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
