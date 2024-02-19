import { Component, OnInit } from '@angular/core';
import { Trips } from '../../trips.model';
import { MessengerService } from 'src/app/messenger.service';
import { SharingService } from 'src/app/sharing.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  tripsList: Trips[] = []

  message : any
  receiveMessage($event: any){
    this.message=$event
  }

  cartItems = [
    { id: 1, productId: 0, productName: 'Example', qty: 1, price: 0 },
    //{ id: 2, productId: 3, productName: 'Test 3', qty: 5, price: 50 },
    //{ id: 3, productId: 2, productName: 'Test 2', qty: 3, price: 150 },
    //{ id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 200 },
];

cartTotal = 0;

  constructor(private msg: MessengerService, private ms: SharingService){}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: any) => {
      this.addProductToCart(product)
    })
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === 1) {
        this.cartItems.pop();
      }
    }
  }
  

  addProductToCart(trips: Trips) {
    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === trips.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: trips.id,
        productName: trips.destination,
        qty: 1,
        price: trips.price,
        id: trips.id
      })
    }

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
