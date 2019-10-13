import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  public edited: boolean;
  public result: any;
  public time: number;
  public inversion: number;
  public porcentaje: number;
  public estado: any={
      ingreso:"",
      costoP:"",
      costoA:"",
      costoV:"",
      impuesto:""
  };
  public estados: any=[];

  constructor(public router: Router) {
    
   }

  ngOnInit() {
    this.edited=false;
    this.time = 0;
    this.inversion = 0;
    this.porcentaje = 0;
    this.result = '';
  }

  redirecTo(value:any){
    console.log("this",value);
    this.router.navigateByUrl(value);
  }

  
  crearVectorResultadoTiempo(){
    this.estados = [];
    for(let i = 0; i<this.time;i++){
        this.estados.push(JSON.parse(JSON.stringify(this.estado)));
    }
  }

  calcular(){
    let result = 0;
    let i = 1;
    this.estados.forEach((element:any) => {
      result += ((element.ingreso - element.costoP - element.costoA - element.costoV - element.impuesto) / (Math.pow(((this.porcentaje/100) + 1),i)))
      i++;
    });
    this.result = result - this.inversion;
  }

 
}


