import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroNegocioComponent } from './componentes/registro-negocio/registro-negocio.component';
import { NegocioComponent } from './componentes/negocio/negocio.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { DetalleNegocioComponent } from './componentes/detalle-negocio/detalle-negocio.component';



export const routes: Routes = [

    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'registro-negocio', component: RegistroNegocioComponent},
    {path: 'negocio', component: NegocioComponent},
    {path: 'gestion-negocios', component:GestionNegociosComponent},
    {path: 'modales', component:ModalComponent},
    {path: 'detalle-negocio/:codigo', component: DetalleNegocioComponent},
    {path: '', pathMatch: "full", redirectTo: ""}
];
