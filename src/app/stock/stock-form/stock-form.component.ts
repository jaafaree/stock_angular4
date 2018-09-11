import {Component, OnInit} from '@angular/core';
import {Stock} from '../stock-manage/stock-manage.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock: Stock;

  constructor() {
  }

  ngOnInit() {
    this.stock = new Stock(1, '第1支股票', 1.99, 2.5, '第一支股票', ['IT']);
  }

}
