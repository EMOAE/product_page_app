import { Component } from '@angular/core';
import { Product } from '../product';
import { PRODS } from 'product_page_list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  prod : Product = {
    id: 1,
    name: 'Product 1',
    location:'html check',
    description:'This is it'
  }


  prods = PRODS;
  
  selectedProd?: Product;

  onSelect (prod : Product): void{
   this.selectedProd = prod; 
  }

}
