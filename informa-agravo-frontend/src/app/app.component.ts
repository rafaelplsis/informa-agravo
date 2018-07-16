import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { PhotoService } from './photo.service';
import { Photo } from './photo';

@Component({
  selector: 'ap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AluraPic';
  photos: Photo[] = [];

  constructor (private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
