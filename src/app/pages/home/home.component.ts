import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products:any = [];

  constructor(
    public productService: ProductService,
    public router: Router,
  ){}

  ngOnInit():void{
    this.productService.listHome().subscribe((data:any) => {
      console.log('init funciona...');
      this.products = data;
      console.log(this.products);
    });
  }

  //funtions

  details(product:any) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/pages/product/', product.id],
        { state: { product: product } }
      );
  }

  addCart() {
    console.log("agregando...");
  }

  listProducts() {}

}
