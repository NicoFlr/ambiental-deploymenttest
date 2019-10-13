import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//generics
import { FooterComponent } from './generics/footer/footer.component';
import { HeaderComponent } from './generics/header/header.component';

//views
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

//services
import { UserService } from '../app/services/user.service';

//guards
import { AuthAccountGuard } from './guards/loggedIn.guard'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MunicipalityComponent,
    HeaderComponent,
    DistrictComponent,
    SubDistrictComponent,
    ClasificationComponent,
    SubClasificationComponent,
    DivisionComponent,
    LocationTreeComponent,
    LoginComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [ 
  UserService,
  AuthAccountGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
