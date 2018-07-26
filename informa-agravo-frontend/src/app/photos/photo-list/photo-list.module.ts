import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonModule } from './load-button/load-button.module';
import { PhotosModule } from './photos/photos.module';
import { PhotoSearchModule } from './photo-search/photo-search.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
      PhotoListComponent,
      FilterByDescription],

  imports: [
      CommonModule,
      LoadButtonModule,
      PhotosModule,
      PhotoSearchModule
    ]
})
export class PhotoListModule {}
