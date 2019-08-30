import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[parallax]',
  host:{
    '(ionScroll)':'onCntscroll($event)',
  }
})
export class ParallaxDirective {
  constructor(
    public el:ElementRef,
    public re: Renderer) { }
  backgrounds:any;
  child:any;
  lastScrollTop:number = 0;
  isContetFill: boolean = false;
  ngAfterViewInit(): void {
    this.fillScrollContent();
  }
  onCntscroll(ev){
    ev.domWrite(()=>{
      if(!this.isContetFill){
        this.fillScrollContent();
      }else{
        this.update(ev);
      }
    });
  }
  fillScrollContent(){
    let scrollContent = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    if (!scrollContent) return;
    this.backgrounds = scrollContent.getElementsByClassName('bg');
    this.child = scrollContent.getElementsByClassName('child');
    for (var i = 0; i < this.backgrounds.length; i++) {
      let background = this.backgrounds[i];
      this.re.setElementStyle(background, 'webTransformOrigin', 'center bottom');
      this.re.setElementStyle(background, 'backgrounds-size', 'cover');
    }
    this.isContetFill = true;
  }
  update(ev){
    for (var i = 0; i < this.backgrounds.length; i++) {
      let background = this.backgrounds[i];
      var style = background.currentStyle || window.getComputedStyle(background),
      url = style.backgroundImage.slice(69, -1).replace(/"/g, "");
      var imgFormat = new Image();
      imgFormat.onload = function(){
      };
      imgFormat.src = url;
      var widthImg = imgFormat.width, heightImg = imgFormat.height, widthScreen = ev.contentWidth;
      var result = (heightImg*widthScreen)/widthImg;

      var  parent = background.parentNode;
      result = result*0.65;
      this.re.setElementStyle(parent, 'height', (result-20)+'px');
      var child = this.child[i];
      let elOffSetTop = background.offsetTop;
      let height = window.innerHeight - 50;
      var ta = (ev.scrollTop - elOffSetTop) / 20;
      this.re.setElementStyle(child, 'height', result+'px');
      if (height <= 800 && elOffSetTop > height && ev.scrollTop > (elOffSetTop - height)) {
        this.re.setElementStyle(background, 'webkitTransform', 'translate3d(0,'+ (ta+8)+ 'px,0)');
        if (ta+8 < 0){
          var px = ta+8;
          px = px-(px*2);
          this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,'+(px)+ 'px,0)');
        } else {
          this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,'+'-'+(ta+8)+ 'px,0)');
        }
      }
    }
  }
}
