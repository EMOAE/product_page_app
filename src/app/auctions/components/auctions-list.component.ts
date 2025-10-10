import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuctionService, AuctionItem } from '../../services/auction.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auctions-list',
  templateUrl: './auctions-list.component.html',
  styleUrls: ['./auctions-list.component.css']
})
export class AuctionsListComponent implements OnInit, OnDestroy {
  items: AuctionItem[] = [];
  private sub?: Subscription;

  constructor(public auctionService: AuctionService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.auctionService.getAuctions().subscribe((items: AuctionItem[]) => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  open(item: AuctionItem) {
    this.router.navigate(['/auctions', item.id]);
  }
}
