import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error-404-page/error-404-page.component';

// Configuración de las rutas padre
const routes: Routes = [
 // Componnetes Lazy Load
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m =>m.AuthModule),
  },

  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m =>m.HeroesModule),
  },
  //Componentes sin Lazy Load
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    //Esta es la redireccion cuando entra al dominio normal el usuario , sin url (dominio.com/)
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  // Cualquier otra ruta que no sea una de las definidas , redirecciona a 404
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }