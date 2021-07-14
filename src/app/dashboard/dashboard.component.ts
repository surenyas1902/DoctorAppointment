import { Component, OnInit } from '@angular/core';
import { IAppointmentList } from '../Models/iappointment-list';
import { format } from 'date-fns';
import { SingleCalendarValue, CalendarValue, ISelectionEvent  } from 'ng2-date-picker';
import { AppointmentsService } from '../Services/appointments.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointmentList: Array<IAppointmentList> = [];
  pageNumber: number = 1;
  filterDate: Date = new Date();

  constructor(private appointmentService: AppointmentsService) { }

  ngOnInit(): void {
    this.filterData();
  }

  filterData() {
    this.appointmentService.getAppointmentList(format(this.filterDate,"yyyy-MM-dd")).subscribe((value) => {
      console.log(value)
      this.appointmentList = value;
    })
  }

  onDateChange(event: ISelectionEvent) {
    this.filterDate = new Date(event.date.toString());
  }

}
