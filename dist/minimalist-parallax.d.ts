import { ElementRef, Renderer } from '@angular/core';
export declare class MinimalistParallax {
    el: ElementRef;
    re: Renderer;
    constructor(el: ElementRef, re: Renderer);
    backgrounds: any;
    child: any;
    lastScrollTop: number;
    isContetFill: boolean;
    ngAfterViewInit(): void;
    onCntscroll(ev: any): void;
    fillScrollContent(): void;
    update(ev: any): void;
}
