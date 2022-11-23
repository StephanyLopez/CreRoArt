import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
  }

}
