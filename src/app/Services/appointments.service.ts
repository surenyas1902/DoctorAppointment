import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppointmentList } from '../Models/iappointment-list';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  getAppointmentList(appointmentDate: string) {
    console.log(appointmentDate);
    return this.http.get<Array<IAppointmentList>>(`${environment.apiURL}doctors/fetchAppointments/${appointmentDate}`)
  }

  saveSlotsDetails(data: IAppointmentList) {
    return this.http.post(`${environment.apiURL}doctors/addslots`, data).pipe(
      map((value) => value),
      catchError((err)=> {
        return of({
          err
        })
      })
    );
  }
}
