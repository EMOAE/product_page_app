import { Component } from '@angular/core';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent {
  title = 'List an item';

  model = {
    title: '',
    description: '',
    startingBid: 0,
    location: '',
    imageUrl: ''
  };

  submit() {
    alert('For demo: item submitted!');
  }
}
