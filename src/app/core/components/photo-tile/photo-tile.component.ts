import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-photo-tile',
    templateUrl: './photo-tile.component.html'
})
export class PhotoTileComponent {

    @Input() photo: string;
    @Input() photoTitle: string;

    constructor() { }
}
