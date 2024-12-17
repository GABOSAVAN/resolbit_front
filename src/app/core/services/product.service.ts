import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public http: HttpClient
  ) { }

  listHome(){
    console.log('listHome funciona....')
    const URL = URL_SERVICIOS+'products';
    return this.http.get(URL);
  }
}