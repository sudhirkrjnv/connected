import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Login } from './login/login';
import { Register } from './register/register';
import { RegisterConfirmation } from './register-confirmation/register-confirmation';

export const routes: Routes = [
    { path: '', component: Homepage},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: 'register-confirmation', component: RegisterConfirmation }
];
