import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any = [];

  constructor(
    public http: HttpClient
  ) { }

  notification(message: string): void {
    const notification = document.createElement('div');
    notification.innerText = message;
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-md z-50 transition-opacity duration-300';
    
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.style.opacity = '0'; 
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  loadInit() {
    const storedProducts = localStorage.getItem('products');

    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      this.listHome().subscribe((data: any) => {
        this.products = data;
        localStorage.setItem('products', JSON.stringify(this.products));
      });
    }
  }

  listHome(){
    console.log('listHome funciona....')
    const URL = URL_SERVICIOS+'products';
    return this.http.get(URL);
  }
}