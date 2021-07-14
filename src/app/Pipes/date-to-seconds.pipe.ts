import { Pipe, PipeTransform } from '@angular/core';
import { differenceInMinutes, getMinutes, getHours, hoursToMilliseconds, minutesToMilliseconds } from 'date-fns';

@Pipe({
  name: 'dateToSeconds'
})
export class DateToSecondsPipe implements PipeTransform {

  transform(value: Date): number {
    const hours = getHours(value);
    const minutes = getMinutes(value);
    const seconds = hoursToMilliseconds(hours) + minutesToMilliseconds(minutes);
    return seconds;
  }

}
