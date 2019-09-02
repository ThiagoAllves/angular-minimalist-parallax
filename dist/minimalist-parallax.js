"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        this.contentWidth = 375;
        this.isContentFill = false;
        this.onUpdateContent = true;
    }
    /**
     * @return {?}
     */
    MinimalistParallax.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.eventsManager();
        }, 200);
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    MinimalistParallax.prototype.onContentScroll = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        var _this = this;
        ev.domWrite(function () {
            if (!_this.isContentFill) {
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
    MinimalistParallax.prototype.eventsManager = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isContentFill) {
            setTimeout(function () {
                _this.fillScrollContent();
            }, 200);
        }
        else {
            var /** @type {?} */ ev = { scrollTop: 0, contentWidth: this.contentWidth };
            if (this.onUpdateContent) {
                this.onUpdateContent = false;
                this.update(ev);
            }
        }
    };
    /**
     * @return {?}
     */
    MinimalistParallax.prototype.fillScrollContent = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var scrollContent, i, background;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.el.nativeElement.getElementsByClassName('scroll-content')[0]];
                    case 1:
                        scrollContent = _a.sent();
                        this.contentWidth = this.el.nativeElement.clientWidth || 375;
                        if (!scrollContent)
                            return [2 /*return*/];
                        this.backgrounds = scrollContent.getElementsByClassName('bg');
                        this.child = scrollContent.getElementsByClassName('child');
                        for (i = 0; i < this.backgrounds.length; i++) {
                            background = this.backgrounds[i];
                            this.re.setElementStyle(background, 'webTransformOrigin', 'center bottom');
                            this.re.setElementStyle(background, 'backgrounds-size', 'cover');
                        }
                        return [4 /*yield*/, this.backgrounds.length];
                    case 2:
                        (_a.sent()) > 0 ? this.isContentFill = true : this.isContentFill = false;
                        if (this.onUpdateContent) {
                            this.eventsManager();
                        }
                        return [2 /*return*/];
                }
            });
        });
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
        return __awaiter(this, void 0, void 0, function () {
            var i, imgFormatObj, child, background, elOffSetTop, height, valueTransform, ta, px;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.backgrounds.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.formatImg(this.backgrounds[i], ev)];
                    case 2:
                        imgFormatObj = _a.sent();
                        this.re.setElementStyle(imgFormatObj.parent, 'height', (imgFormatObj.result) + 'px');
                        child = this.child[i];
                        background = this.backgrounds[i];
                        elOffSetTop = background.offsetTop;
                        height = window.innerHeight - 100;
                        valueTransform = ((imgFormatObj.resultVal) * 0.35) / 2;
                        ta = ((ev.scrollTop - elOffSetTop) / 10) + valueTransform;
                        this.re.setElementStyle(child, 'height', (imgFormatObj.result) + 'px');
                        this.re.setElementStyle(background, 'height', imgFormatObj.resultVal + 'px');
                        this.re.setElementStyle(background, 'webkitTransform', 'translate3d(0,' + (valueTransform) + 'px,0)');
                        if (height <= 800 && this.isShowingInScreen(ev, elOffSetTop, height)) {
                            this.re.setElementStyle(background, 'webkitTransform', 'translate3d(0,' + -(ta + 8) + 'px,0)');
                            if (ta + 8 < 0) {
                                px = ta + 8;
                                px = px - (px * 2);
                                this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,' + (px) + 'px,0)');
                            }
                            else {
                                this.re.setElementStyle(child, 'webkitTransform', 'translate3d(0,' + (ta + 8) + 'px,0)');
                            }
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} ev
     * @param {?} elOffSetTop
     * @param {?} height
     * @return {?}
     */
    MinimalistParallax.prototype.isShowingInScreen = /**
     * @param {?} ev
     * @param {?} elOffSetTop
     * @param {?} height
     * @return {?}
     */
    function (ev, elOffSetTop, height) {
        if (ev.scrollTop + 150 > (elOffSetTop - height)) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} background
     * @param {?} ev
     * @return {?}
     */
    MinimalistParallax.prototype.formatImg = /**
     * @param {?} background
     * @param {?} ev
     * @return {?}
     */
    function (background, ev) {
        return __awaiter(this, void 0, void 0, function () {
            var style, url, regExp, imgFormat, widthImg, heightImg, widthScreen, resultVal, parent, result;
            return __generator(this, function (_a) {
                style = background.currentStyle || window.getComputedStyle(background), url = style.backgroundImage.replace(/"/g, "");
                regExp = /\url\((.*?)\)/g;
                url = regExp.exec(url)[1];
                imgFormat = new Image();
                imgFormat.onload = function () { };
                imgFormat.src = url;
                widthImg = imgFormat.width, heightImg = imgFormat.height, widthScreen = ev.contentWidth;
                resultVal = (heightImg * widthScreen) / widthImg;
                parent = background.parentNode;
                result = (resultVal * 0.65);
                return [2 /*return*/, { style: style, url: url, regExp: regExp, widthImg: widthImg, heightImg: heightImg, widthScreen: widthScreen, resultVal: resultVal, parent: parent, result: result, }];
            });
        });
    };
    MinimalistParallax.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[minimalist-parallax]',
                    template: "\n  <div class=\"over\">\n   <div class=\"bg\"  [ngStyle]=\"{'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url()'}\">\n     <!-- <div class=\"child\">\n       <h2>{{ text optional }}</h2>  \n     </div> -->\n   </div>\n  </div>\n  ",
                    styles: ["\n  over {\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n  .bg{\n    background-size: cover;\n    background-position: center center;\n  }\n  .banner {\n    position: relative;\n    overflow: hidden;\n  }\n  .main-cnt{\n    width: 100%;\n    height: 70px;\n    overflow: hidden;\n    background-color: #efefef;\n  }\n  \n  .hgroup {\n    padding: 0 20px;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    text-align: center;\n  }\n  "],
                    host: {
                        '(ionScroll)': 'onContentScroll($event)',
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
    MinimalistParallax.prototype.contentWidth;
    /** @type {?} */
    MinimalistParallax.prototype.isContentFill;
    /** @type {?} */
    MinimalistParallax.prototype.onUpdateContent;
    /** @type {?} */
    MinimalistParallax.prototype.el;
    /** @type {?} */
    MinimalistParallax.prototype.re;
}
//# sourceMappingURL=minimalist-parallax.js.map