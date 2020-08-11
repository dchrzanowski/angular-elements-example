import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ui-button',
    templateUrl: './uibutton.component.html',
    styleUrls: ['./uibutton.component.scss']
})
export class UIButtonComponent implements OnInit {
    bgState: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
}
