import { Renderer, ElementRef } from '@angular/core';
export declare class MinimalistParallax {
    el: ElementRef;
    re: Renderer;
    constructor(el: ElementRef, re: Renderer);
    backgrounds: any;
    child: any;
    lastScrollTop: number;
    contentWidth: number;
    isContentFill: boolean;
    onUpdateContent: boolean;
    ngAfterViewInit(): void;
    onContentScroll(ev: any): void;
    eventsManager(): void;
    fillScrollContent(): Promise<void>;
    update(ev: any): Promise<void>;
    isShowingInScreen(ev: any, elOffSetTop: any, height: any): boolean;
    formatImg(background: any, ev: any): Promise<{
        style: any;
        url: any;
        regExp: RegExp;
        widthImg: number;
        heightImg: number;
        widthScreen: any;
        resultVal: number;
        parent: any;
        result: number;
    }>;
}
