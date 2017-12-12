import { Component, OnInit} from '@angular/core'
declare var AMap: any;

@Component({
    selector: 'MyMap',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})

export class Container {
    map: any;
    
    constructor() {

    }

    ngOnInit() {
        this.map = new AMap.Map('container', {

        });
    }
}