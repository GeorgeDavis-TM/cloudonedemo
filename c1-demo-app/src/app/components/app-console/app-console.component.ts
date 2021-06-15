import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { NgTerminal, FunctionsUsingCSI } from 'ng-terminal';

@Component({
  selector: 'app-app-console',
  templateUrl: './app-console.component.html',
  styleUrls: ['./app-console.component.css']
})
export class AppConsoleComponent implements OnInit, AfterViewInit {
  
  @ViewChild('term', { static: true }) child: NgTerminal;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    let underlying = this.child.underlying;
    underlying.setOption("fontSize", 20);
    this.child.write('$ ');
    // this.child.keyInput.subscribe((input) => {
    //   //do nothing because it will be replaced keyEventInput
    // })

    this.child.keyEventInput.subscribe(e => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);

      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) {
        this.child.write('\n' + FunctionsUsingCSI.cursorColumn(1) + '$ '); // \r\n
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this.child.underlying.buffer.active.cursorX > 2) {
          this.child.write('\b \b');
        }
      } else if (printable) {
        this.child.write(e.key);
      }
    })
  }
}
