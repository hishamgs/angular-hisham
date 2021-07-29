import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';

import { AlbumTileComponent } from '../core/components';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    AlbumTileComponent
  ],
  exports: [
    AlbumTileComponent
  ]
})
export class HomeModule {}
