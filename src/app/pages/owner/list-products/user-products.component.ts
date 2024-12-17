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
    this.loadProducts();
  }

  //functions

  loadProducts(){
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
    console.log(this.products);
    }
    setTimeout(()=>{
      this.calculateTotal();
    }, 500)
  }
  
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

  delete(productId: string): void {
    const storedProducts = localStorage.getItem('products');
    
    if (storedProducts) {
      const products = JSON.parse(storedProducts);
      const updatedProducts = products.filter((product: any) => product.id !== productId);
      this.products = updatedProducts;
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      this.calculateTotal(); 
      this.productService.notification(`Producto con ID ${productId} eliminado correctamente.`);
    }
     else {
      this.productService.notification('No hay productos almacenados en el LocalStorage.');
    }
  }
  
  

  
}
