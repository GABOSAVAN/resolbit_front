import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

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
    public productService: ProductService
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
      const product = {
        id: this.product.id,
        name: this.product.name,
        brand: this.product.brand,
        price: this.product.price,
        quantity: this.product.quantity,
        size: this.product.size,
        image: this.product.image,
        description: this.product.image
    }
      // Obtén los productos actuales desde el localStorage
      const storedProducts = localStorage.getItem('products');
      const products = storedProducts ? JSON.parse(storedProducts) : [];
    
      // Busca el índice del producto a actualizar
      const productIndex = products.findIndex((product: any) => product.id === product.id);
    
      if (productIndex !== -1) {
        // Actualiza el producto en el array
        products[productIndex] = { ...products[productIndex], ...product };
    
        // Guarda los productos actualizados en el localStorage
        localStorage.setItem('products', JSON.stringify(products));
    
        // Muestra un mensaje de confirmación
        this.productService.notification(`Producto con id ${product.id} actualizado correctamente.`);

        this.details()
      } else {
        // Muestra un mensaje de error si no se encuentra el producto
        console.error(`Producto con id ${product.id} no encontrado.`);
      }
    }
  
}
