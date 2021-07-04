import { Component, OnInit } from '@angular/core';
import { IAppointmentList } from '../Models/iappointment-list';
import { format } from 'date-fns';
import { SingleCalendarValue, CalendarValue, ISelectionEvent  } from 'ng2-date-picker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointmentList: Array<IAppointmentList> = [];
  pageNumber: number = 1;
  filterDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {

  }

  filterData() {

  }

  onDateChange(event: ISelectionEvent) {
    this.filterDate = new Date(event.date.toString());
  }

}
