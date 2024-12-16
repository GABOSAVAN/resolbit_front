import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-products',
  standalone: true,
  imports: [],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.css'
})
export class CreateProductsComponent {

  constructor(private router: Router) {}  

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
}
