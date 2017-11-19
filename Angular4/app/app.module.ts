import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MenuListComponent } from './menu/menuList.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuListComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports:
    [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuListComponent,
        ManagerComponent,
        LoginComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
