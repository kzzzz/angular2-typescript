import {Component} from 'angular2/core';

import {Courses} from "./courses";
import {Authors} from './authors';

import {AutoGrow} from '../directives/auto-grow';

@Component({
    selector: 'my-app',
    directives: [Courses, Authors, AutoGrow],
    template: `
    <div>
        <h1>{{title}}</h1>
        <input type="text" autoGrow />
        <courses></courses>
        <authors></authors>
    </div>`
})
export class AppComponent {
    title = "The title of course page";
}