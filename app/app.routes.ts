import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true //tells the router whether or not it should continue matching our URL against the rest of our defined routes.
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
