import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { Location, NgIf } from '@angular/common';


@Component({
  selector: 'app-update-products',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
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
    public productService: ProductService,
    private location: Location
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
    this.location.back();
  }

  save() {
    const updatedProduct = {
      id: this.product.id,
      name: this.product.name,
      brand: this.product.brand,
      price: this.product.price,
      quantity: this.product.quantity,
      size: this.product.size,
      image: this.product.image,
      description: this.product.description
    };
  
    const storedProducts = localStorage.getItem('products');
    const products = storedProducts ? JSON.parse(storedProducts) : [];
  
    const productIndex = products.findIndex((p: any) => p.id === updatedProduct.id);
  
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...updatedProduct };
  
      localStorage.setItem('products', JSON.stringify(products));
  
      this.productService.notification(`Producto ${updatedProduct.name} actualizado.`);
    } else {
      console.error(`Producto con id ${updatedProduct.id} no encontrado.`);
    }
  
    localStorage.setItem('selectedProduct', JSON.stringify(updatedProduct));
    this.details();
  }
  
  
}
