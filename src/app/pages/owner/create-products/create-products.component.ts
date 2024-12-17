import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent {

  product = {
    id:'',
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
  ){} 

  toCart() {
    this.router.navigate(['/pages/cart']
      //  { state: { _id: _id } }
      );
  }  

  toInventary() {
    this.router.navigate(['/owner/list']
      //  { state: { _id: _id } }
      );
  }

  addCart() {
    console.log("agregando...");
  }

  save() {
    console.log('Producto Guardado:', this.product);
  }
}
