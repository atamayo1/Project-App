import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckAccountComponent } from './components/check-account/check-account.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'check-account', component: CheckAccountComponent },
  { path: '**', redirectTo: '' } // Ruta de comodín para redireccionar a la página de inicio
];
