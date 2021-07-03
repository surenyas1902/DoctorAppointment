import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddslotsComponent } from './addslots/addslots.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'doctors',
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'addslot', component: AddslotsComponent },
      { path: '', redirectTo: '/doctors/home', pathMatch: 'full'}
    ]
  },
  { path:'', redirectTo:'/doctors/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
