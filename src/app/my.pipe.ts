import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(gender:string, value:string): any {
      console.log('---------------------------'+gender);
      console.log('-----------------'+value);
      if(value=='male')
        return 'Mr ' + gender;
      else
        return 'Miss ' + gender;
  }

}
