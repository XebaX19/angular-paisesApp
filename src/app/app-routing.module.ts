import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
	{
		//Componente a mostrar en la ruta raíz ("/")
		path: '',
		component: PorPaisComponent ,
		pathMatch: 'full' //tiene que hacer match completo con el path "/" (raíz) para ingresar en esta ruta
	},
	{
		//Componente a mostrar en la ruta "/region"
		path: 'region',
		component: PorRegionComponent 
	},
	{
		//Componente a mostrar en la ruta "/capital"
		path: 'capital',
		component: PorCapitalComponent 
	},
	{
		//Componente a mostrar en la ruta "/pais/:id"
		path: 'pais/:id',
		component: VerPaisComponent 
	},
	{
		//Componente a mostrar en cualquier otro path (en vez de mostrar un 404 NOT FOUND, lo redireccionamos a la ruta raíz)
		path: '**',
		redirectTo: ''
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }