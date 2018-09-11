import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';

  pageDesc = '';

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        if (event.url === '/dashboard') {
          this.pageTitle = 'Dashboard';
          this.pageDesc = '';
        } else if (event.url.startsWith('/stock')) {
          this.pageTitle = 'Stock Manage';
          this.pageDesc = 'xxxxxxxxxxxx';
        }
      });

  }

  ngOnInit() {
  }

}
