import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService, AuctionItem } from '../../services/auction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent implements OnInit, OnDestroy {
  item?: AuctionItem;
  private sub?: Subscription;

  bidderName = 'Player1';
  bidAmount?: number;

  constructor(private route: ActivatedRoute, private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.auctionService.getAuctionById(id).subscribe((it: AuctionItem | undefined) => (this.item = it));
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  placeBid() {
    if (!this.item || !this.bidAmount) return;
    const res = this.auctionService.placeBid(this.item.id, this.bidderName, this.bidAmount);
    if (!res.ok) {
      alert(res.error);
    } else {
      this.bidAmount = undefined;
    }
  }
}
