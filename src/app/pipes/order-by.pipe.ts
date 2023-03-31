import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(ordenamiento: any[], field: string): any[] {
    if (!Array.isArray(ordenamiento)) {
      return[];
    }
    ordenamiento.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      }
      if (a[field] < b[field]) {
        return 1;
      }
      return 0;
    });
    return ordenamiento;
  }
}
