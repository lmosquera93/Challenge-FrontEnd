import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const resultPosts = [];
    for (const travels of value) {
      if (travels.city.name.indexOf(args) > -1 || travels.vehicle.type.indexOf(args) > -1 || travels.vehicle.patent.indexOf(args) > -1) {
      
        resultPosts.push(travels);

      };
    };
    return resultPosts; 
  }

}
