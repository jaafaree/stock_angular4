import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  stocks: Array<Stock>;

  constructor(public router: Router) {
  }

  ngOnInit() {

    this.stocks = [
      new Stock(1, '第1支股票', 1.99, 2.5, '第一支股票', ['IT']),
      new Stock(2, '第2支股票', 2.99, 3.5, '第二支股票', ['互聯網']),
      new Stock(3, '第3支股票', 3.99, 4.5, '第三支股票', ['互聯網']),
      new Stock(4, '第4支股票', 4.99, 1.5, '第四支股票', ['互聯網']),
      new Stock(5, '第5支股票', 5.99, 2.5, '第五支股票', ['互聯網']),
      new Stock(6, '第6支股票', 6.99, 3.5, '第六支股票', ['互聯網']),
      new Stock(7, '第7支股票', 7.99, 4.5, '第七支股票', ['互聯網']),
      new Stock(8, '第8支股票', 8.99, 5.0, '第八支股票', ['金融']),
      new Stock(9, '第9支股票', 9.99, 1.0, '第九支股票', ['互聯網'])
    ];
  }

  createStock() {
    this.router.navigateByUrl('/stock/0');
  }

  updateStock(stock: Stock) {
    this.router.navigateByUrl(`/stock/${stock.id}`);
  }


}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>
  ) {
  }
}
