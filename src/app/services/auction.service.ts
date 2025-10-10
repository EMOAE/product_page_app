import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, map } from 'rxjs';

export interface Bid {
  bidder: string;
  amount: number;
  time: number; // epoch ms
}

export interface AuctionItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  currentBid: number;
  startingBid: number;
  endTimeMs: number;
  location: string;
  bids: Bid[];
  seller: string;
}

@Injectable({ providedIn: 'root' })
export class AuctionService {
  private readonly items$ = new BehaviorSubject<AuctionItem[]>(this.seedItems());

  getAuctions(): Observable<AuctionItem[]> {
    return this.items$.asObservable();
  }

  getAuctionById(id: number): Observable<AuctionItem | undefined> {
    return this.items$.pipe(map(list => list.find(i => i.id === id)));
  }

  placeBid(itemId: number, bidder: string, amount: number): { ok: boolean; error?: string } {
    const list = [...this.items$.value];
    const idx = list.findIndex(i => i.id === itemId);
    if (idx < 0) return { ok: false, error: 'Auction not found' };

    const item = list[idx];
    const now = Date.now();
    if (now >= item.endTimeMs) return { ok: false, error: 'Auction ended' };
    const minBid = Math.max(item.currentBid, item.startingBid) + 1;
    if (amount < minBid) return { ok: false, error: `Bid must be ≥ ${minBid}` };

    const newBid: Bid = { bidder, amount, time: now };
    const updated: AuctionItem = { ...item, currentBid: amount, bids: [...item.bids, newBid] };
    list[idx] = updated;
    this.items$.next(list);
    return { ok: true };
  }

  timeLeft$(item: AuctionItem): Observable<{ ms: number; display: string }> {
    return interval(1000).pipe(
      map(() => {
        const ms = Math.max(0, item.endTimeMs - Date.now());
        const s = Math.floor(ms / 1000);
        const h = Math.floor(s / 3600);
        const m = Math.floor((s % 3600) / 60);
        const ss = s % 60;
        const display = `${h}h ${m}m ${ss}s`;
        return { ms, display };
      })
    );
  }

  private seedItems(): AuctionItem[] {
    const now = Date.now();
    return [
      {
        id: 1,
        title: 'Neo-Geo AES Console',
        description: 'Legendary 90s home arcade system in mint condition.',
        imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60',
        currentBid: 350,
        startingBid: 300,
        endTimeMs: now + 1000 * 60 * 60 * 6,
        location: 'Akihabara, JP',
        bids: [],
        seller: 'PixelSmith'
      },
      {
        id: 2,
        title: 'CRT Monitor 17" Trinitron',
        description: 'Crisp scanlines, perfect for retro gaming.',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=60',
        currentBid: 120,
        startingBid: 100,
        endTimeMs: now + 1000 * 60 * 60 * 2,
        location: 'Berlin, DE',
        bids: [],
        seller: 'CRTWizard'
      },
      {
        id: 3,
        title: 'SNES Game Lot (10x)',
        description: 'Mixed classics, tested and cleaned.',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=60',
        currentBid: 90,
        startingBid: 80,
        endTimeMs: now + 1000 * 60 * 45,
        location: 'Austin, US',
        bids: [],
        seller: 'RetroRanger'
      }
    ];
  }
}
