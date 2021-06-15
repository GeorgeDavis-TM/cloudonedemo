import { Component, OnInit } from '@angular/core';

import { C1TickerService } from './services/c1-ticker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'c1-demo-app';

  constructor(
    private tickerService: C1TickerService
  ) { }

  ngOnInit(): void {
    console.log("App Init - " + Date.now().toString());
    if (localStorage.length === 0) {
      this.tickerService.setBrowserState("session-start-timestamp", Date.now()) 
    }
    this.tickerService.getFssTicks()
    this.tickerService.writeToAppConsole("Hello, World! from App Console :)")
  }  
}
