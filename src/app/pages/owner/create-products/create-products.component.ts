import { Location, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent {

  product = {
    name: '',
    brand: '',
    price: 0,
    quantity: 0,
    size: '',
    image: '',
    description: '',
  };

  constructor(
    public router: Router,
    public productService: ProductService,
    private location: Location
  ){} 

  toCart() {
    this.router.navigate(['/pages/cart']
      //  { state: { _id: _id } }
      );
  }  

  goBack() {
    this.location.back();
  }  

  save() {

      const newP = this.product    

      const storedProducts = localStorage.getItem('products');

      const products = storedProducts ? JSON.parse(storedProducts) : [];

      const newId = (products.length + 1).toString();
    
      const productWithId = { ...newP, id: newId };
    
      products.push(productWithId);
    
      localStorage.setItem('products', JSON.stringify(products));
    
      this.productService.notification(`Producto con id ${newId} creado correctamente.`);
      
      this.goBack();
    }
    
}
