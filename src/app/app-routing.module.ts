import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmprendedorComponent } from './emprendedor/emprendedor.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { InversionistaComponent } from './inversionista/inversionista.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:"usuario",component:UsuarioComponent},
  {path:"emprendedor",component:EmprendedorComponent},
  {path:"inversionista",component:InversionistaComponent},
  {path:"estadisticas",component:EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
