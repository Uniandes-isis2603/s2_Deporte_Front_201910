import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CanchaListComponent } from '../cancha/cancha-list/cancha-list.component';
import { PropietarioListComponent } from '../propietario/propietario-list/propietario-list.component';
import { CanchaDetailComponent } from '../cancha/cancha-detail/cancha-detail.component';
import {CampeonatoListComponent} from '../campeonato/campeonato-list/campeonato-list.component';
import {BlogListComponent} from '../blog/blog-list/blog-list.component';
import {PostListComponent} from '../post/post-list/post-list.component';
import {CampeonatoCreateComponent} from '../campeonato/campeonato-create/campeonato-create.component';
import {BlogCreateComponent} from '../blog/blog-create/blog-create.component';
//import {CampeonatoDetailComponent} from '../campeonato/campeonato-detail/campeonato-detail.component';
import { PropietarioDetailComponent } from '../propietario/propietario-detail/propietario-detail.component';
import { CanchaCreateComponent } from '../cancha/cancha-create/cancha-create.component';
import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { AgendaListComponent } from '../agenda/agenda-list/agenda-list.component';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteCreateComponent} from '../cliente/cliente-create/cliente-create.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {ClienteEditComponent} from '../cliente/cliente-edit/cliente-edit.component';

import {EquipoListComponent} from '../equipo/equipo-list/equipo-list.component';
import {EquipoCreateComponent} from '../equipo/equipo-create/equipo-create.component';
import {EquipoDetailComponent} from '../equipo/equipo-detail/equipo-detail.component';
import {EquipoEditComponent} from '../equipo/equipo-edit/equipo-edit.component';

import {PartidoListComponent} from '../partido/partido-list/partido-list.component';
import {PartidoCreateComponent} from '../partido/partido-create/partido-create.component';
import {PartidoDetailComponent} from '../partido/partido-detail/partido-detail.component';
import {PartidoEditComponent} from '../partido/partido-edit/partido-edit.component';

const routes: Routes = [
  
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path:'canchas',
        children:[
            {
                path: 'list',
                component: CanchaListComponent
            },
            {
                path: 'create',
                component: CanchaCreateComponent
            },
            {
                path: ':id',
                component: CanchaDetailComponent
            }
        ]
    },
    {
        path: 'agendas',
        children:[
            {
                path: 'list',
                component: AgendaListComponent
            },
            {
                path: ':id',
                component: AgendaDetailComponent
            }
        ]
    },
    {
        path: 'propietarios',
        children:[
            {
                path: 'list',
                component: PropietarioListComponent
            },
            {
                path: ':id',
                component: PropietarioDetailComponent
            }
        ]
    },
     {
        path: 'posts',
        children:[
            {
                path: 'list',
                component: PostListComponent
            }
        ]
    },
     {
        path: 'blogs',
        children:[
            {
                path: 'list',
                component: BlogListComponent
            },
             {
                path: 'add',
                component: BlogCreateComponent,
                runGuardsAndResolvers: 'always'
            },
        ]
    },
     {
        path: 'campeonatos',
        children:[
            {
                path: 'list',
                component: CampeonatoListComponent
            },
            {
                path: 'add',
                component: CampeonatoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
//            {
//                path: 'detail',
//                component: CampeonatoDetailComponent,
//            },
        ]
    },
    {
        path: 'clientes',
        children:[
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'id',
                component: ClienteDetailComponent,
            },
        ]
    },
    {
        path: 'partidos',
        children:[
            {
                path: 'list',
                component: PartidoListComponent
            },
            {
                path: 'add',
                component: PartidoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'id',
                component: PartidoDetailComponent,
            },
        ]
    },
    {
        path: 'equipos',
        children:[
            {
                path: 'list',
                component: EquipoListComponent
            },
            {
                path: 'add',
                component: EquipoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'id',
                component: EquipoDetailComponent,
            },
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
