import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/messenger.service';
import { Trips } from 'src/app/trips/trips.model';
import { MatDialog } from '@angular/material/dialog';
import { SharingService } from 'src/app/sharing.service';
import { DetailsCartComponent } from '../../cart/details-cart/details-cart.component';




@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  @Input() tripsItem!: Trips
  profileOpened: boolean = false;

  constructor(private msg: MessengerService, private dialog: MatDialog, private ms: SharingService) { }

  ngOnInit(): void {
  }
  handleAddToCart() {
    this.msg.sendMsg(this.tripsItem)
  }
  handleAddToDetails() {
    this.ms.sendMsg(this.tripsItem)
  }
  openDetails() {

    this.profileOpened = true;
    const profileDialog = this.dialog.open(DetailsCartComponent, {
      disableClose: true,
      width: "50vw",
      height: "35vw"
    });
    
  }

}
