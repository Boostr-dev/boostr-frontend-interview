import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backwardString'
})
export class BackwardStringPipe implements PipeTransform {

  transform(value: string): string {
    return '';
  }

}
