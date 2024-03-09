import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';



@NgModule({
  declarations: [ Error404PageComponent ],
  // Lo exporto porque quiero que sea una ruta por defecto en el AppRouting
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
