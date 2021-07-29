import { NgModule } from '@angular/core';

import { AlbumDetailComponent } from './album-detail.component';
import { PhotoTileComponent } from '../core/components';

import { SharedModule } from '../shared';
import { AlbumDetailRoutingModule } from './album-detail-routing.module';



@NgModule({
  imports: [
    SharedModule,
    AlbumDetailRoutingModule
  ],
  declarations: [
    AlbumDetailComponent,
    PhotoTileComponent
  ],
  exports: [
    PhotoTileComponent
  ]
})
export class AlbumDetailModule {}
