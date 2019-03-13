import { Pipe, PipeTransform } from '@angular/core';
import { UtilsServiceProvider } from '../../providers/utils-service/utils-service';

/**
 * Generated class for the PhonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {

  constructor(private utils: UtilsServiceProvider) { }

  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return this.utils.toTel(value);
  }
}
