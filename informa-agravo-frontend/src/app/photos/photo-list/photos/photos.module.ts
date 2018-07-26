import { NgModule } from "@angular/core";
import { PhotosComponent } from "./photos.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../../photo/photo.module";
import { CardModule } from "../../../shared/components/card/card.module";
import { DarkenOnHoverModule } from "../../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [PhotosComponent],
  imports: [
      CommonModule,
      PhotoModule,
      CardModule,
      DarkenOnHoverModule
    ],
  exports: [PhotosComponent]
})
export class PhotosModule {}
