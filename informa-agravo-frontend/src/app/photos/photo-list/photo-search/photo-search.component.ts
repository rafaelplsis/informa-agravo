import { OnInit, Component, EventEmitter, Output, OnDestroy, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "ap-photo-search",
  templateUrl: "./photo-search.component.html"
})
export class PhotoSearchComponent implements OnInit, OnDestroy{
  debounce: Subject<string> = new Subject();

  @Output() keyPressing = new EventEmitter<string>();
  @Input() value = '';

  constructor () {}

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.keyPressing.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
