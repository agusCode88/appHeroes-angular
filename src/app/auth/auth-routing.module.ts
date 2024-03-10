import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

// Definición de las rutas principales de la APP
//localhost:4200/auth/''
const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( routes ),
    ],
    exports: [ 
        RouterModule
    ],
})
export class AuthRoutingModule { }
