import { Component, OnInit } from '@angular/core';
import {MessageCountService} from './message-count.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messageCount = 0;

  constructor(public messageCountService: MessageCountService) { }

  ngOnInit() {
    this.messageCountService.createObservalbeSocket('ws://localhost:8085')
      .pipe(map(event => JSON.parse(event)))
      .subscribe(
        event => this.messageCount = event.messageCount
      );
  }
}
