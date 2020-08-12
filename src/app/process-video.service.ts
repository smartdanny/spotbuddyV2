import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { testThing }  from './testThing';
// import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class ProcessVideoService {

  constructor(private http: HttpClient) { }

  ngOninit() {
  }

  doSomething(){
  }

  addVideo(){
  }

}
