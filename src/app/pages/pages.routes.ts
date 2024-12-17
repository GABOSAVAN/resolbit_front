// src/app/pages/page/page.routes.ts
import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-detail/product-details.component';
import { owner_routes } from './owner/owner.routes';
import { LoginComponent } from './login/login/login.component';

export const PAGE_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'pages/login',
        component: LoginComponent
      },
      {
        path: 'pages/cart',
        component: CartComponent
      },
      {
        path: 'pages/product/:id',
        component: ProductDetailsComponent
      },
      
      ...owner_routes
      
    ]
  }
];
