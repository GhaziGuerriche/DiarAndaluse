import { Routes } from '@angular/router';

import { HomeRoutes, HomeComponent } from './home/index';
import { AboutRoutes } from './about/index';




export const routes: Routes = [

    ...HomeRoutes,
	...AboutRoutes,

	{ path: '**', component: HomeComponent }
];