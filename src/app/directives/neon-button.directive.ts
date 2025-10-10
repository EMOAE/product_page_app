import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import anime from 'animejs';

@Directive({
  selector: '[appNeonButton]'
})
export class NeonButtonDirective implements OnInit {
  constructor(private readonly hostRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.hostRef.nativeElement;
    node.style.willChange = 'transform, box-shadow, color';
  }

  @HostListener('mouseenter') onEnter() {
    const node = this.hostRef.nativeElement;
    anime.remove(node);
    anime({
      targets: node,
      scale: 1.05,
      duration: 160,
      easing: 'easeOutQuad',
      boxShadow: ['0 0 8px rgba(0,255,247,0.4)', '0 0 22px rgba(255,43,214,0.7)'],
      color: '#00fff7'
    });
  }

  @HostListener('mouseleave') onLeave() {
    const node = this.hostRef.nativeElement;
    anime.remove(node);
    anime({
      targets: node,
      scale: 1.0,
      duration: 180,
      easing: 'easeOutQuad',
      boxShadow: '0 0 10px rgba(0,255,247,0.6)'
    });
  }

  @HostListener('mousedown') onDown() {
    const node = this.hostRef.nativeElement;
    anime.remove(node);
    anime({ targets: node, scale: 0.97, duration: 90, easing: 'easeOutQuad' });
  }

  @HostListener('mouseup') onUp() {
    const node = this.hostRef.nativeElement;
    anime.remove(node);
    anime({ targets: node, scale: 1.05, duration: 140, easing: 'easeOutBack' });
  }
}
