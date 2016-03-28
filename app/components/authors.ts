import {Component} from 'angular2/core';
import {AuthorsService} from '../services/authors.service';

@Component({
    selector: "authors",
    providers: [AuthorsService],
    template: `
    <div>
        <h2>{{title}} Authors </h2>
        <ul>
            <li *ngFor="#author of authors">
            {{author}}
            </li>
        </ul>
    </div>`
})

export class Authors{
    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
    title: 'Authors title';
    authors;
}
