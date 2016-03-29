import {Component} from 'angular2/core';

import {Courses} from "./courses";
import {Authors} from './authors';
import {Favorite} from './favorite';

import {AutoGrow} from '../directives/auto-grow';

@Component({
    selector: 'my-app',
    directives: [Courses, Authors, Favorite, AutoGrow],
    template: `
    <div>
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title" autoGrow />
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
    </div>`
})
export class AppComponent {
    title = "The title of course page";
}