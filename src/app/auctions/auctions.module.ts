import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsListComponent } from './components/auctions-list.component';
import { AuctionDetailComponent } from './components/auction-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuctionsListComponent, AuctionDetailComponent],
  imports: [CommonModule, FormsModule, SharedModule, AuctionsRoutingModule],
})
export class AuctionsModule {}
