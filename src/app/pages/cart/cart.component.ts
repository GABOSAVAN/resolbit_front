import { NgFor, NgIf } from '@angular/common';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  carts: any = [];
  value: number = 0;

  constructor(
    public router: Router,
    public productService: ProductService
  ){}

  ngOnInit(): void {
    this.productService.loadcart();
    this.carts = this.productService.cart;
    setTimeout(()=>{
      this.calculateTotal();
    },500)
  }

  //funtions

  toHome() {
    this.router.navigate(['/']
      );
  }

  deleteCart(cart: any) {
    const storedCart = localStorage.getItem('cart');
    let carts = storedCart? JSON.parse(storedCart) : [];

    const existingProductIndex = carts.findIndex(
      (item: any) => item.id === cart.id
    );

    if (existingProductIndex!== -1) {
      carts.splice(existingProductIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(carts));

    this.carts = carts;

    this.productService.notification(`Producto ${cart.name} eliminado.`);

    this.productService.loadcart()

    this.calculateTotal();
  }

  calculateTotal(): void {
    this.value = this.carts.reduce((total: number, cart: any) => {
       return total + (cart.subtotal || 0);
    }, 0);      
}
}
