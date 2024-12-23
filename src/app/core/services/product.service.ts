import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  products: any = [];
  cart: any = [];
  cartsItem:number = 0;

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
        // console.log('data: ', data);
        this.products = data;
        localStorage.setItem('products', JSON.stringify(this.products));
      });
    }
  }

  loadcart() {
    const storedCarts = localStorage.getItem('cart');

    if (storedCarts) {
      this.cart = JSON.parse(storedCarts);
      this.cartsItem = this.cart.reduce((total: number, item: any) => total + item.unids, 0);
    }   
  }

 

  listHome(){
    console.log('listHome funciona....')
    const URL = URL_SERVICIOS+'products';
    return this.http.get(URL);
  }

  addCart(product: any): void {    

    product.subtotal = product.unids? product.unids * product.price: product.price * 1

    const storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];

    const existingProductIndex = cart.findIndex(
      (item: any) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].unids += 1;
      cart[existingProductIndex].subtotal = cart[existingProductIndex].unids * cart[existingProductIndex].price
    } else {

      product.unids = 1;
      cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    this.notification(`Producto ${product.name} añadido al carrito.`);
  }
}