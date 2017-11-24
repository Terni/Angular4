import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// Nav bar and routing modul
import { AppComponent } from './nav/app.component';
import { routing } from './app.routing';

// My main pages
import { HomeComponent } from './home/index';
import { MenuListComponent } from './menu/index';
import { ManagerComponent } from './manager/index';
import { LoginComponent } from './login/index';

//Login guard and services for currentUser
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, AlertService, DataService, LoadService, CommonService } from './_services/index';

@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuListComponent,
        ManagerComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        AlertService,
        DataService,
        LoadService,
        CommonService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
