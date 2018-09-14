import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyWord: any): any[] {

    if (!field || !keyWord) {
      return list;
    }

    return list.filter(item => {
      const value = item[field].toLowerCase();
      return value.indexOf(keyWord.toLowerCase()) > -1;
    });

  }

}
