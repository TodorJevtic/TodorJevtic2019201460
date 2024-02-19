import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/sharing.service';
import { Trips } from 'src/app/trips/trips.model';

@Component({
  selector: 'app-details-cart',
  templateUrl: './details-cart.component.html',
  styleUrls: ['./details-cart.component.css']
})
export class DetailsCartComponent implements OnInit {

  tripsList: Trips[] = []

  id=5;
  destination= '';
  type_of_travel= 'plane';
  distance= 1;
  price= 1;
  date= Date;
  description= '';
  rating= 1;
  comment= '';
  status= 'done';
  imageUrl= 'xa';



  constructor(private ms: SharingService) { }

  ngOnInit(): void {
    this.ms.getMsg().subscribe((product: any) => {
      this.tripsList = product

      this.id = product.id;
      this.destination = product.destination;
      this.type_of_travel = product.type_of_travel;
      this.distance = product.distance;
      this.price = product.price;
      this.date = product.date;
      this.description = product.description;
      this.rating = product.rating;
      this.comment = product.comment;
      this.status = product.status;
      this.imageUrl = product.imageUrl;

    })
  }

}
