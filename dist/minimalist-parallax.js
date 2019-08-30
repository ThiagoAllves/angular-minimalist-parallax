"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MinimalistParallax = /** @class */ (function () {
    function MinimalistParallax(el, re) {
        this.el = el;
        this.re = re;
        this.lastScrollTop = 0;
        this.isContetFill = false;
    }
    /**
     * @return {?}
     */
    MinimalistParallax.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.fillScrollContent();
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    MinimalistParallax.prototype.onCntscroll = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        var _this = this;
        ev.domWrite(function () {
            if (!_this.isContetFill) {
                _this.fillScrollContent();
            }
            else {
                _this.update(ev);
            }
        });
    };
    /**
     * @return {?}
     */
    MinimalistParallax.prototype.fillScrollContent = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollContent = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
        if (!scrollContent)
            return;
        this.backgrounds = scrollContent.getElementsByClassName('bg');
        this.child = scrollContent.getElementsByClassName('child');
        for (var /** @type {?} */ i = 0; i < this.backgrounds.length; i++) {
            var /** @type {?} */ background = this.backgrounds[i];
            this.re.setElementStyle(background, 'webTransformOrigin', 'center bottom');
            this.re.setElementStyle(background, 'backgrounds-size', 'cover');
        }
        this.isContetFill = true;
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    MinimalistParallax.prototype.update = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        for (var /** @type {?} */ i = 0; i < this.backgrounds.length; i++) {
            var /** @type {?} */ background = this.backgrounds[i];
            var /** @type {?} */ style = background.currentStyle || window.getComputedStyle(background), /** @type {?} */
            url = style.backgroundImage.slice(69, -1).replace(/"/g, "");
            var /** @type {?} */ imgFormat = new Image();
            imgFormat.onload = function () {
            };
            imgFormat.src = url;
            var /** @type {?} */ widthImg = imgFormat.width, /** @type {?} */ heightImg = imgFormat.height, /** @type {?} */ widthScreen = ev.contentWidth;
            var /** @type {?} */ result = (heightImg * widthScreen) / widthImg;
            var /** @type {?} */ parent = background.parentNode;
            result = result * 0.65;
            this.re.setElementStyle(parent, 'height', (result - 20) + 'px');
            var /** @type {?} */ child = this.child[i];
            var /** @type {?} */ elOffSetTop = background.offsetTop;
            var /** @type {?} */ height = window.innerHeight - 50;
            var /** @type {?} */ ta = (ev.scrollTop - elOffSetTop) / 20;
            this.re.setElementStyle(child, 'height', result + 'px');
            if (height <= 800 && elOffSetTop > height && ev.scrollTop > (elOffSetTop - height)) {
                this.re.setElementStyle(background, 'webkitTransform', 'translate3d(0,' + (ta + 8) + 'px,0)');
                if (ta + 8 < 0) {
                    var /** @type {?} */ px = ta + 8;
                    px = px - (px * 2);
                    this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,' + (px) + 'px,0)');
                }
                else {
                    this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,' + '-' + (ta + 8) + 'px,0)');
                }
            }
        }
    };
    MinimalistParallax.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[parallax]',
                    host: {
                        '(ionScroll)': 'onCntscroll($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    MinimalistParallax.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ]; };
    return MinimalistParallax;
}());
exports.MinimalistParallax = MinimalistParallax;
function MinimalistParallax_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MinimalistParallax.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MinimalistParallax.ctorParameters;
    /** @type {?} */
    MinimalistParallax.prototype.backgrounds;
    /** @type {?} */
    MinimalistParallax.prototype.child;
    /** @type {?} */
    MinimalistParallax.prototype.lastScrollTop;
    /** @type {?} */
    MinimalistParallax.prototype.isContetFill;
    /** @type {?} */
    MinimalistParallax.prototype.el;
    /** @type {?} */
    MinimalistParallax.prototype.re;
}
//# sourceMappingURL=minimalist-parallax.js.map