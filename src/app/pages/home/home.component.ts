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
    public router: Router
    ) {}

  ngOnInit(): void {
    this.productService.loadInit();

    setTimeout(()=>{
      this.loadProducts();
    }, 500)
  }

  //funtions 
  loadProducts(){
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
    console.log(this.products);
    }
  }

  details(product: any) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/pages/product/', product.id], {
      state: { product: product },
    });
  }

  addCart() {
    console.log('agregando...');
  }

  listProducts() {}
  
}
