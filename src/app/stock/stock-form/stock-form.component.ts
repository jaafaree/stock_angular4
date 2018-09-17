import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  stock: Stock = new Stock(0, '', 0, 0, '', []);

  categories: Array<string> = ['IT', 'Bank', 'Game'];

  constructor(private routeInfo: ActivatedRoute
    , private stockService: StockService
    , private router: Router) {
  }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];

    const fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        desc: [''],
        categories: fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false)
        ], this.categoriesSelectValidator)
      }
    );
    this.stockService.getStock(stockId).subscribe(stock => {
      this.stock = stock;
      this.formModel.reset({
        name: stock.name,
        price: stock.price,
        desc: stock.desc,
        categories: [
          stock.categories.indexOf(this.categories[0]) > -1,
          stock.categories.indexOf(this.categories[1]) > -1,
          stock.categories.indexOf(this.categories[2]) > -1
        ]
      });
    });
  }

  categoriesSelectValidator(control: FormArray) {
    let valid = false;
    control.controls.forEach(control => {
      if (control.value) {
        valid = true;
      }
    });
    if (valid) {
      return null;
    } else {
      return {
        categoriesLength: true
      };
    }

    return;
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    //console.log(this.stock.rating);
    //this.router.navigateByUrl('/stock');

    let chineseCategories = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        chineseCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
  }

}
