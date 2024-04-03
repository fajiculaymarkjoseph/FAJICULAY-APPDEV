import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuardGuard implements CanActivate {
  constructor(private http:HttpClient){}

  canActivate(): Observable<any> {
    return this.http.get<any>('url')
    
  }
  
}
