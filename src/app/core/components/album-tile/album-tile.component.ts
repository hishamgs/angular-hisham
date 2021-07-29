import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-tile',
  templateUrl: './album-tile.component.html'
})
export class AlbumTileComponent {

  @Input() albumImage: string;
  @Input() albumTitle: string;
  @Input() photoCount: number;

    constructor() { }
}
