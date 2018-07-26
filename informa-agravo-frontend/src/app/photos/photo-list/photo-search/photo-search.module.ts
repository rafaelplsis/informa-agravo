import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoSearchComponent } from "./photo-search.component";
import { DarkenOnHoverModule } from "../../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [PhotoSearchComponent],
  imports: [
      CommonModule],
  exports: [PhotoSearchComponent]
})
export class PhotoSearchModule {}
