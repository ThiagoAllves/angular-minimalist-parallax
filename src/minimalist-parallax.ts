import { Component, Renderer, ElementRef} from '@angular/core';
@Component({
  selector: '[minimalist-parallax]',
  styles: [`
  over {
    overflow: hidden;
    margin-bottom: 10px;
  }
  .bg{
    background-size: cover;
    background-position: center center;
  }
  .banner {
    position: relative;
    overflow: hidden;
  }
  .main-cnt{
    width: 100%;
    height: 70px;
    overflow: hidden;
    background-color: #efefef;
  }
  
  .hgroup {
    padding: 0 20px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    text-align: center;
  }
  h2 {
    margin-top: 0;
    margin-bottom: 4px;
    color: white;
    font-size: 4vw;
    font-weight: 600;
}
  `],
  host:{
    '(ionScroll)':'onContentScroll($event)',
  }
})
export class MinimalistParallax{
  constructor(
    public el:ElementRef,
    public re: Renderer) {}
  backgrounds:any;
  child:any;
  lastScrollTop:number = 0;
  contentWidth:number = 375;
  isContentFill: boolean = false;
  onUpdateContent: boolean = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.eventsManager();
    }, 200);
  }
  onContentScroll(ev){
  ev.domWrite(()=>{
    if(!this.isContentFill){
      this.fillScrollContent();
    }else{
      this.update(ev);
    }
  });
}
eventsManager (){
  if(!this.isContentFill){
    setTimeout(() => {
      this.fillScrollContent();
    }, 200);
  }else{
    let ev = {scrollTop : 0, contentWidth: this.contentWidth};
    if (this.onUpdateContent) {
      this.onUpdateContent = false;
      this.update(ev);
    }
  }
}
  async fillScrollContent(){
    let scrollContent = await this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    this.contentWidth = this.el.nativeElement.clientWidth || 375;
    if (!scrollContent) return;
    this.backgrounds = scrollContent.getElementsByClassName('bg');
    this.child = scrollContent.getElementsByClassName('child');
    for (var i = 0; i < this.backgrounds.length; i++) {
      let background = this.backgrounds[i];
      this.re.setElementStyle(background, 'webTransformOrigin', 'center bottom');
      this.re.setElementStyle(background, 'backgrounds-size', 'cover');
    }
    await this.backgrounds.length > 0 ? this.isContentFill = true : this.isContentFill = false;
    if (this.onUpdateContent) {
      this.eventsManager();
    }
  }
  async update(ev){
    for (var i = 0; i < this.backgrounds.length; i++) {

      let imgFormatObj = await this.formatImg(this.backgrounds[i], ev);

      this.re.setElementStyle(imgFormatObj.parent, 'height', (imgFormatObj.result)+'px');
      var child = this.child[i];
      let background = this.backgrounds[i];
      let elOffSetTop = background.offsetTop;
      let height = window.innerHeight - 100;
      var valueTransform = ((imgFormatObj.resultVal)*0.35)/2;
      var ta = ((ev.scrollTop - elOffSetTop) / 10)+valueTransform;
      this.re.setElementStyle(child, 'height', (imgFormatObj.result)+'px');
      this.re.setElementStyle(background, 'height', imgFormatObj.resultVal+'px');
      this.re.setElementStyle(background, 'webkitTransform', 'translate3d(0,'+ (valueTransform)+ 'px,0)');
      if (height <= 800 &&  this.isShowingInScreen(ev, elOffSetTop, height)) {
        this.re.setElementStyle(background, 'webkitTransform', 'translate3d(0,'+ -(ta+8)+ 'px,0)');
        if (ta+8 < 0){
          var px = ta+8;
          px = px-(px*2);
          this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,'+(px)+ 'px,0)');
        } else {
          this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,'+(ta+8)+ 'px,0)');
        }
      }
    }
  }
  isShowingInScreen(ev, elOffSetTop, height,){
    if (ev.scrollTop + 150 > (elOffSetTop - height)) {
      return true;
    }else{
      return false;
    }
  }
  async formatImg(background, ev){
    var style = background.currentStyle || window.getComputedStyle(background),
    url = style.backgroundImage.replace(/"/g, "");
    var regExp = /\url\((.*?)\)/g;
    url = regExp.exec(url)[1];
    var imgFormat = new Image();
    imgFormat.onload = function(){};
    imgFormat.src = url;
    var widthImg = imgFormat.width, heightImg = imgFormat.height, widthScreen = ev.contentWidth;
    var resultVal = (heightImg*widthScreen)/widthImg;
    var  parent = background.parentNode;
    var result = (resultVal*0.65);
    return {style,url,regExp,widthImg,heightImg,widthScreen,resultVal,parent,result,}
  }
}
