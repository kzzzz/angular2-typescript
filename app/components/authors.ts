import {Component} from 'angular2/core';
import {AuthorsService} from '../services/authors.service';
import {Favorite} from './favorite';

@Component({
    selector: "authors",
    directives: [Favorite],
    providers: [AuthorsService],
    template: `
    <div>
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="#author of authors">
            <favorite [isFavorite]="author.isFavorite"></favorite>
            {{author.name}}
            </li>
        </ul>
    </div>`
})

export class Authors{
    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
    title = 'Authors';
    authors;
}
