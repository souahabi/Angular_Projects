import { DetailsComponent } from './exercice3/details/details.component';
import { AcceuilComponent } from './exercice3/acceuil/acceuil.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercice2Component } from './exercice2/exercice2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"exercice1",component:Exercice1Component},
  {path:"exercice2",component:Exercice2Component},
  {path:"exercice3",component:Exercice3Component ,
  children:[
    { path:'acceuil' , component : AcceuilComponent},
    { path: 'details/:id', component : DetailsComponent},
    { path: '', component : AcceuilComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
