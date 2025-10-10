import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionsListComponent } from './components/auctions-list.component';
import { AuctionDetailComponent } from './components/auction-detail.component';

const routes: Routes = [
  { path: '', component: AuctionsListComponent },
  { path: ':id', component: AuctionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionsRoutingModule {}
