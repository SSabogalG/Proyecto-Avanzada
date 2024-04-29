import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroNegocioComponent } from './componentes/registro-negocio/registro-negocio.component';
import { NegocioComponent } from './componentes/negocio/negocio.component';

export const routes: Routes = [

    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'registro-negocio', component: RegistroNegocioComponent},
    {path: 'negocio', component: NegocioComponent},
    {path: '', pathMatch: "full", redirectTo: ""}
];
