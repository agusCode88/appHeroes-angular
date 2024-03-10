import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

//localhost:4200/heroes/''
const routes: Routes = [
    {
      // Esta es la página principal , todas redireccionan finalmente acá
      path: '',
      component: LayoutPageComponent,
      children: [
        {
          path:'new-hero',
          component: NewPageComponent
        },

        {
          path:'search',
          component: SearchPageComponent
        },

        {
          path:'edit/:id',
          component: NewPageComponent
        },

        {
          path:'list',
          component: ListPageComponent
        },

        //Es un comodin , tiene que ir al final , si no nunca entraría  buscar las otras rutas
        {
          path:':id',
          component: HeroPageComponent
        },

        {
          path:'**',
          redirectTo:'list'
        },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
