import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddslotsComponent } from './addslots/addslots.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DateFormatPipe } from './Pipes/date-format.pipe';
import { DpDatePickerModule } from 'ng2-date-picker';
import { AppointmentsService } from './Services/appointments.service';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { DateToSecondsPipe } from './Pipes/date-to-seconds.pipe';
//import { NgxSmartModalService } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddslotsComponent,
    DateFormatPipe,
    AppointmentsComponent,
    DateToSecondsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    DpDatePickerModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    FormsModule
  ],
  providers: [AppointmentsService, DateToSecondsPipe, DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
