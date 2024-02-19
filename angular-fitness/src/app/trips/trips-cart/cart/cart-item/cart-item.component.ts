import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{
  @Input() cartItem! : any
  @Output () event = new EventEmitter<any>()
  constructor(public hm: CartComponent){}

  ngOnInit(): void {
    
  }
  sendMessage(){
    this.event.emit(this.cartItem.qty)
    console.log(this.cartItem.qty)
  }

  dec(){
    if(this.cartItem.qty>0){
      this.cartItem.qty--;
      this.hm.cartTotal = this.hm.cartTotal - this.cartItem.price;
    }
  }
  inc(){
    this.cartItem.qty++
    this.hm.cartTotal = this.hm.cartTotal + this.cartItem.price;
  }
  deleteItem(){

      this.hm.cartItems = this.hm.cartItems.filter(item => item.id !== this.cartItem.id);

      
      this.hm.cartTotal = 0;
      this.hm.cartItems.forEach(item => {
        this.hm.cartTotal += (item.qty * item.price);
      });
  }



}
