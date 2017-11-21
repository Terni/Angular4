import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { MenuListComponent } from './menu/index';
import { ManagerComponent } from './manager/index';
import { LoginComponent } from './login/index';

import { AuthGuard } from './_guards/index';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuListComponent },
    { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);