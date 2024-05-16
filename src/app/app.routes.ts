import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroNegocioComponent } from './componentes/registro-negocio/registro-negocio.component';
import { NegocioComponent } from './componentes/negocio/negocio.component';
import { GestionNegociosComponent } from './componentes/gestion-negocios/gestion-negocios.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { DetalleNegocioComponent } from './componentes/detalle-negocio/detalle-negocio.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { LoginGuard } from './guard/permiso.service';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { RolesGuard } from './guard/roles.service';



export const routes: Routes = [

    {path: '', component: InicioComponent},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    {path: 'registro', component: RegistroComponent, canActivate:[LoginGuard]},
    {path: 'registro-negocio', component: RegistroNegocioComponent,  canActivate: [RolesGuard], data:{
        expectedRole: ["CLIENTE"]
    }},

    {path: 'negocio', component: NegocioComponent},

    {path: 'gestion-negocios', component:GestionNegociosComponent, canActivate: [RolesGuard], data:{
        expectedRole: ["CLIENTE"]
    }},
    {path: 'modales', component:ModalComponent},
    {path: 'detalle-negocio/:codigo', component: DetalleNegocioComponent},
    {path: 'busqueda/:texto', component: BusquedaComponent},
    {path: "categorias", component:CategoriasComponent}, 
    {path: "favoritos", component: FavoritosComponent}, //cliente 
    {path: '', pathMatch: "full", redirectTo: ""}
];
