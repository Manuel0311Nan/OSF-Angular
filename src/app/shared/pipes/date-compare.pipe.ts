import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCompare'
})
export class DateComparePipe implements PipeTransform {

  transform(sho: { date: string  }): boolean {
    const currentDate = new Date();
    const apiDateObj = new Date(sho.date);
    return apiDateObj.getTime() > currentDate.getTime();
  }

}
