import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { PAGE_ROUTES } from './pages/pages.routes';

export const routes: Routes = [
    {
        path: '',
        children: [
          ...PAGE_ROUTES
        ]
      },  

  { path: '**', redirectTo: '' },
];