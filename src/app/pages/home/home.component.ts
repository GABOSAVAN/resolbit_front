import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products: any = [];

  constructor(
    public productService: ProductService, 
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productService.loadInit();

    setTimeout(() => {
      this.loadProducts();
    }, 500);
  }

  //funtions
  loadProducts() {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      console.log(this.products);
    }
    this.authService.getUser()
  }

  details(product: any) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/pages/product/', product.id], {
      state: { product: product },
    });
  }

   addToCart(product: any): void {    

    this.productService.addCart(product)

   }
  
}
