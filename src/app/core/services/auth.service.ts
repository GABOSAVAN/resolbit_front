import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient
  ) { }

  login(data:any){
    console.log('listHome funciona....')
    const URL = URL_SERVICIOS+'user/login';
    return this.http.post(URL, data)
  } 

}
