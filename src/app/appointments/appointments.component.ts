import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { IDay } from 'ng2-date-picker';
import { format } from 'date-fns';
import { AppointmentsService } from '../Services/appointments.service';
import { IAppointmentList } from '../Models/iappointment-list';
import { AddslotsComponent } from '../addslots/addslots.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DateFormatPipe } from '../Pipes/date-format.pipe';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentDate: Date = new Date();
  appointmentList: Array<IAppointmentList> = [];
  morningAppointments: Array<IAppointmentList> = [];
  eveningAppointments: Array<IAppointmentList> = [];
  currentIndex: number = -1;

  constructor(private appointmentService: AppointmentsService, private modalService: NgxSmartModalService, private secondsPipe: DateFormatPipe) { }

  ngOnInit(): void {
    this.fetchAppointments()
  }

  fetchAppointments() {
    this.appointmentService.getAppointmentList(format(this.appointmentDate,"yyyy-MM-dd")).subscribe((value) => {
      this.appointmentList = value;
    })

    this.morningAppointments = this.appointmentList.filter(({appointmentStartTime}) =>
      new Date(appointmentStartTime).toLocaleTimeString().includes("am")
    )
    this.eveningAppointments = this.appointmentList.filter(({appointmentStartTime}) =>
      new Date(appointmentStartTime).toLocaleTimeString().includes("pm")
    )
  }

  onDateChanged(Idate: IDay) {
    this.appointmentDate = Idate.date.toDate();
  }

  addSlots() {
    this.modalService.create("myModal", AddslotsComponent).setData(this.appointmentDate).open();
  }

  onChangeTime($event: number) {
    this.currentIndex = $event;
  }

}
