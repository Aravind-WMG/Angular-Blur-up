import { Injectable, Input } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtistService{
    private newsURL = 'http://localhost:3320/poc/testjson/newsv1.json?cg45';
    constructor(private http: Http) { }


    getNews(){
        return  this.http.get(this.newsURL)
         .map((res:Response)=>res.json())
         .catch(this.httpError);
     }
    private httpError(error:any){
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);

    }
}