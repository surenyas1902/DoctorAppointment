import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'doctors',
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'appointments', component: AppointmentsComponent },
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
