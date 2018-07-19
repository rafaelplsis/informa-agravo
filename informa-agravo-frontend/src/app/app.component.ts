import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { PhotoService } from './photo.service';
import { Photo } from './photo';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AluraPic';
}
