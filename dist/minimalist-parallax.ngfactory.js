"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./minimalist-parallax");
var styles_MinimalistParallax = ["over[_ngcontent-%COMP%] {\n    overflow: hidden;\n    margin-bottom: 10px;\n  }\n  .bg[_ngcontent-%COMP%]{\n    background-size: cover;\n    background-position: center center;\n  }\n  .banner[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n  }\n  .main-cnt[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 70px;\n    overflow: hidden;\n    background-color: #efefef;\n  }\n  \n  .hgroup[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    text-align: center;\n  }\n  h2[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 4px;\n    color: white;\n    font-size: 4vw;\n    font-weight: 600;\n}"];
var RenderType_MinimalistParallax = i0.ɵcrt({ encapsulation: 0, styles: styles_MinimalistParallax, data: {} });
exports.RenderType_MinimalistParallax = RenderType_MinimalistParallax;
function View_MinimalistParallax_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "div", [["class", "minimalist-parallax over"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(2, 0, null, null, 8, "div", [["class", "bg"]], null, null, null, null, null)), i0.ɵdid(3, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, null, null, 4, "div", [["class", "child"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(7, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.backgroundImg(); _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.category; _ck(_v, 8, 0, currVal_1); }); }
exports.View_MinimalistParallax_0 = View_MinimalistParallax_0;
function View_MinimalistParallax_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["minimalist-parallax", ""]], null, [[null, "ionScroll"]], function (_v, en, $event) { var ad = true; if (("ionScroll" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onContentScroll($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_MinimalistParallax_0, RenderType_MinimalistParallax)), i0.ɵdid(1, 4243456, null, 0, i2.MinimalistParallax, [i0.ElementRef, i0.Renderer], null, null)], null, null); }
exports.View_MinimalistParallax_Host_0 = View_MinimalistParallax_Host_0;
var MinimalistParallaxNgFactory = i0.ɵccf("[minimalist-parallax]", i2.MinimalistParallax, View_MinimalistParallax_Host_0, { category: "category", image: "image" }, {}, []);
exports.MinimalistParallaxNgFactory = MinimalistParallaxNgFactory;
//# sourceMappingURL=minimalist-parallax.ngfactory.js.map