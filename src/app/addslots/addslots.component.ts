import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { differenceInMinutes, getMinutes, getHours, hoursToSeconds, minutesToSeconds } from 'date-fns';
import { ITimeSelectConfig } from 'ng2-date-picker/time-select/time-select-config.model';
import * as moment from 'moment';
import { IAppointmentList } from '../Models/iappointment-list';
import { AppointmentsService } from '../Services/appointments.service';
import { DateToSecondsPipe } from '../Pipes/date-to-seconds.pipe';

@Component({
  selector: 'app-addslots',
  templateUrl: './addslots.component.html',
  styleUrls: ['./addslots.component.css']
})
export class AddslotsComponent implements OnInit, OnDestroy {

  appointmentDate: Date = new Date();
  fromTime: moment.Moment = moment(new Date(), true);
  toTime: moment.Moment = moment(new Date(), true);
  fromTimerConfig: ITimeSelectConfig = { showTwentyFourHours: true };
  toTimerConfig: ITimeSelectConfig = { showTwentyFourHours: true };

  constructor(private modalService: NgxSmartModalService, private appointService: AppointmentsService, private secondsPipe: DateToSecondsPipe) { }

  ngOnInit(): void {
    this.appointmentDate = this.modalService.getModalData('myModal');
  }

  ngOnDestroy() {
    this.modalService.removeModal('myModal');
  }

  submitData() {
    const fromTime: Date = this.fromTime.toDate();
    const toTime: Date = this.toTime.toDate();
    const minutes = differenceInMinutes(toTime, fromTime);
    if (minutes< 30 || minutes > 30) {
      alert(`Duration of appointment should be 30 minutes`)
    }
    const data: IAppointmentList = {
      patientName: "Random",
      contactNumber: 1234567890,
      gender: "M",
      appointmentDate: this.appointmentDate,
      appointmentStartTime: this.secondsPipe.transform(this.fromTime.toDate()),
      appointmentEndTime: this.secondsPipe.transform(this.toTime.toDate())
    };
    this.appointService.saveSlotsDetails(data).subscribe((value) => {
     alert(value);
    });
  }

}
