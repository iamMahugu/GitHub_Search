import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any): number {
    let today:Date=new Date();
    let todayWithNotime:any=new Date(todat.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference=Math.abs(value-todayWithNotime);
    const daysInSeconds=86400;
    var dateDifferentSeconds=dateDifferencw*0.001;
    var dateCounter=dateDifferentSeconds/daysInSeconds;
    if(dateCounter>=1 && value >todayWithNotime){
      return dateCounter;
    }
    else{
      return 0;
    }

  }

}
