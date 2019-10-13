import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = "https://tsi-sistemaambiental.herokuapp.com/";

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  getById(url, id){
    return this.http.get(this.baseUrl + url + "/" + id); 
  }

  getByPrevious(apiUrl, id, url){
    return this.http.get(this.baseUrl + apiUrl + "/" + id + "/" + url, httpOptions);
  }

  post(url: string, data: any) {
    console.log(this.baseUrl + url);
    return this.http.post(this.baseUrl + url, data, httpOptions);
  }

  put(url, data) {
    return this.http.put(this.baseUrl + url, data);
  }

  delete(url, id) {
    return this.http.delete(this.baseUrl + url + "/" + id);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}