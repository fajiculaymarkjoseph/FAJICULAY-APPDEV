import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePage } from './home/home.page';
import { NpagePage } from './npage/npage.page';

@Injectable({
  providedIn: 'root'
})

export class SpageService {
  constructor(private http:HttpClient){}
  
  fetchData():Observable<any>{
    return this.http.get<any>('url');
  }
}
