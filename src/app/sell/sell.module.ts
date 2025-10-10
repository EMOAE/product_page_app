import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellComponent } from './sell.component';
import { SharedModule } from '../shared/shared.module';
import { SellRoutingModule } from './sell-routing.module';

@NgModule({
  declarations: [SellComponent],
  imports: [CommonModule, FormsModule, SharedModule, SellRoutingModule],
})
export class SellModule {}
