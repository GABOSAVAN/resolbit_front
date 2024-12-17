import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-products',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './update-products.component.html',
  styleUrl: './update-products.component.css'
})
export class UpdateProductsComponent {

  // product: any;
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

  ngOnInit(): void {

    const storedProduct = localStorage.getItem('selectedProduct');

    if (storedProduct) {
      this.product = JSON.parse(storedProduct);
    } else {
      const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['product'];
  }
  console.log(this.product);
  }
  //funtions

  details() {
    this.router.navigate(['/pages/product/', this.product.id]
      );
  }

  save() {
    console.log('Producto Guardado:', this.product);
  }
}
