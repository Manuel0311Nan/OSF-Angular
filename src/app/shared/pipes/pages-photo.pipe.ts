import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from 'src/app/interfaces/Photo-Interface';

@Pipe({
  name: 'pagesPhoto'
})
export class PagesPhotoPipe implements PipeTransform {

  transform(photos: Photo[], page: number = 0): Photo[] {
   return photos.slice(page, page + 8)
  }

}
