import { Component, OnInit } from '@angular/core';
import { Trips } from '../../trips.model';
import { TripsService } from '../../trips.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  tripsList: Trips[] = []
  term: any;

  constructor(private tripsService: TripsService){}

  ngOnInit(): void {
    this.tripsList = this.tripsService.getTrips()
  }
  
}
