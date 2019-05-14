import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './global/components/home/home.component';
import { MainHistoricoComponent } from './historico-spain/components/main-historico/main-historico.component';

const APP_ROUTES:Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'historico', component: MainHistoricoComponent }, 
    { path: '**', redirectTo: 'historico' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});