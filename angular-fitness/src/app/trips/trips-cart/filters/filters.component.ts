import { Component, OnInit } from '@angular/core';
import { Trips } from '../../trips.model';
import { TripsService } from '../../trips.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{

  tripsList: Trips[] = []

  constructor(private tripsService: TripsService){}

  ngOnInit(): void {
    this.tripsList = this.tripsService.getTrips();
  }

}
