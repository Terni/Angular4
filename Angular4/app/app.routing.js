"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./home/index");
const index_2 = require("./menu/index");
const index_3 = require("./manager/index");
const index_4 = require("./login/index");
const index_5 = require("./_guards/index");
const appRoutes = [
    { path: '', component: index_1.HomeComponent, pathMatch: 'full' },
    { path: 'home', component: index_1.HomeComponent },
    { path: 'menu', component: index_2.MenuListComponent },
    { path: 'manager', component: index_3.ManagerComponent, canActivate: [index_5.AuthGuard] },
    { path: 'login', component: index_4.LoginComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map