import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-products',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './user-products.component.html',
  styleUrl: './user-products.component.css'
})
export class UserProductsComponent {

  products:any = [];
  value: number = 0;

  constructor(
    public productService: ProductService,
    public router: Router,
  ){}

  ngOnInit():void{
    this.productService.listHome().subscribe((data:any) => {
      this.products = data;
      this.calculateTotal();
    });
  }

  //functions

  calculateTotal(): void {
    this.value = this.products.reduce((total: number, product: any) => {
       return total + (product.price * product.quantity);
    }, 0);      
}

  backHome() {
    this.router.navigate(['/']
      );
  }

  addProduct() {
    this.router.navigate(['/owner/create']
      //  { state: { _id: _id } }
      );
  }

  toEdit() {
    this.router.navigate(['/owner/update/01']
      //  { state: { _id: _id } }
      );
  }
  
}
