import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // import('assets/toggle_functions.js');
    // import('assets/button_dropdown_functions.js');
    // import('assets/card_functions.js');
    // import('assets/add_cards.js');
  }

}
