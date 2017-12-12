import { Component, OnInit } from '@angular/core';
declare var AMap: any;  //why?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  map: any;

  constructor() {

  }

  ngOnInit() {
    this.map = new AMap.Map('container', {
      resizeEnable: true, 
    });
  }
}
