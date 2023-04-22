import {delay, Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private totalItems = 100;

  getItems(page = 1, itemsPerPage =9):Observable <string[ ]>{
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = [];
    for (let i = startIndex; i < endIndex; i++){
      if (i < this.totalItems) {
        items.push(`Item ${i+1}`)
      }
    }
    return of(items).pipe(delay(500))
  }


  constructor() { }
}
