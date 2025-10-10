import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import anime from 'animejs';

@Directive({
  selector: '[appTilt3d]'
})
export class Tilt3dDirective implements OnInit {
  @Input() tiltMax = 12;
  @Input() tiltScale = 1.0;

  private readonly node: HTMLElement;

  constructor(elRef: ElementRef<HTMLElement>, private renderer: Renderer2) {
    this.node = elRef.nativeElement;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.node, 'transformStyle', 'preserve-3d');
    this.renderer.setStyle(this.node, 'transform', `perspective(800px) scale(${this.tiltScale})`);
    this.renderer.setStyle(this.node, 'willChange', 'transform');
  }

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    const rect = this.node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = this.tiltMax * px * 2; // left/right
    const rotateX = -this.tiltMax * py * 2; // up/down

    anime.remove(this.node);
    anime({
      targets: this.node,
      rotateX,
      rotateY,
      duration: 120,
      easing: 'easeOutQuad'
    });
  }

  @HostListener('mouseleave')
  onLeave(): void {
    anime.remove(this.node);
    anime({
      targets: this.node,
      rotateX: 0,
      rotateY: 0,
      duration: 300,
      easing: 'easeOutExpo'
    });
  }
}
