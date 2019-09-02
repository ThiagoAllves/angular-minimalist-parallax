import { Renderer, ElementRef } from '@angular/core';
export declare class MinimalistParallax {
    el: ElementRef;
    re: Renderer;
    category: string;
    image: string;
    backgrounds: any;
    child: any;
    lastScrollTop: number;
    contentWidth: number;
    isContentFill: boolean;
    onUpdateContent: boolean;
    constructor(el: ElementRef, re: Renderer);
    ngAfterViewInit(): void;
    onContentScroll(ev: any): void;
    backgroundImg(): {
        backgroundImage: string;
    };
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
