import { Component, OnInit } from '@angular/core';
import { IAppointmentList } from '../Models/iappointment-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointmentList: Array<IAppointmentList> = [];
  pageNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
    for(let j = 0; j<10; j++) {
    const appointment: IAppointmentList = {
      _id: Math.random().toString(),
      patientName: "Surendiran S",
      contactNumber: 1234567890,
      appointmentStartTime: new Date(),
      appointmentEndTime: new Date(),
      gender: "M"
    };
    this.appointmentList.push(appointment);
  }

  }

}
