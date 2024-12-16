import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { UserProductsComponent } from './list-products/user-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

export const owner_routes: Routes = [
  {
    path: 'owner/list',
    component: UserProductsComponent,
    canActivate: [authGuard], // Ruta protegida
  },
  {
    path: 'owner/create',
    component: CreateProductsComponent,
    canActivate: [authGuard], // Ruta protegida
  },
  {
    path: 'owner/update/:id',
    component: UpdateProductsComponent,
    canActivate: [authGuard], // Ruta protegida
  },
];
