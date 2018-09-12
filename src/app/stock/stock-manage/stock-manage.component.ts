import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  stocks: Array<Stock>;

  constructor(public router: Router, private stockService: StockService) {
  }

  ngOnInit() {

    this.stocks = this.stockService.getStocks();

  }

  createStock() {
    this.router.navigateByUrl('/stock/0');
  }

  updateStock(stock: Stock) {
    this.router.navigateByUrl(`/stock/${stock.id}`);
  }


}

