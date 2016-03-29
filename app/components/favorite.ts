import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `<i class="glyphicon"
        [class.glyphicon-star-empty]="!isFavorite"
        [class.glyphicon-star]="isFavorite"
        [style.background-color]="isFavorite ? 'red' : 'white' "
        (click)="onClick()">
    </i>`
})


export class Favorite {
    @Input()  isFavorite = false;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}