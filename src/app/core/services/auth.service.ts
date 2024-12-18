import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any = null;

  constructor(
    public http: HttpClient,
    public productService: ProductService
  ) { }

  getUser() {
    if(this.user){
      return this.user;
    }
    const userStr = localStorage.getItem('user');
    if(userStr){
      this.user = JSON.parse(userStr);
    }
    return this.user;
  }

  login(data:any){
    console.log('listHome funciona....')
    const URL = URL_SERVICIOS+'user/login';
    return this.http.post(URL, data)    
  } 

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    this.productService.notification('Sesión cerrada');
    // Opcional: redirige al usuario a la página de inicio o login
    // this.router.navigate(['/login']);
    // setTimeout(() => {
    //   location.reload();
    // },1000);
  }

}
