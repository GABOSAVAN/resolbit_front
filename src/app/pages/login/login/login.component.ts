import { ProductService } from './../../../core/services/product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private productService: ProductService, 
    private router: Router
  ) {}  

  login(): void {

    const data = {
      email: this.email,
      password: this.password,
    }

    console.log(data);

    if (this.email && this.password) {
      // Llamamos al servicio de login con los datos del formulario
      this.authService.login(data).subscribe((response: any) => {
        // Si la respuesta es válida, guardar el usuario en localStorage
        if (response) {
          console.log('response...',response);
          const user = {
            name: response.User.name,
            email: response.User.email,
            role: response.User.role
          };
          localStorage.setItem('user', JSON.stringify(user));
          // Redirige al usuario a otra página (puede ser al home o dashboard)
          this.productService.notification('Login exitoso');
          this.router.navigate(['/']);
          this.productService.notification('Login exitoso');
        }
        else{
          // Si hay un error en el login, se muestra el mensaje
          this.productService.notification('Usuario no existe');
        }
      });
    } else {
      this.productService.notification('Por favor ingrese todos los campos');
    }
  }
}
