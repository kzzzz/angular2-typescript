import {Component} from 'angular2/core';
import {CourseService} from '../services/courses.service';

@Component({
    selector: "courses",
    providers: [CourseService],
    template: `<div>
        <h2>Courses</h2>
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
    </div>`
})

export class Courses{

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
    courses;
}
