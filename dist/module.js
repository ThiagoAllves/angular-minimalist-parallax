"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ionic_angular_1 = require("ionic-angular");
var util_classes_1 = require("./util-classes");
var minimalist_parallax_1 = require("./minimalist-parallax");
var MinimalistParallaxModule = /** @class */ (function () {
    function MinimalistParallaxModule() {
    }
    MinimalistParallaxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        util_classes_1.MapToIterable,
                        minimalist_parallax_1.MinimalistParallax
                    ],
                    imports: [
                        ionic_angular_1.IonicModule,
                        common_1.CommonModule
                    ],
                    exports: [
                        util_classes_1.MapToIterable,
                        minimalist_parallax_1.MinimalistParallax
                    ]
                },] },
    ];
    return MinimalistParallaxModule;
}());
exports.MinimalistParallaxModule = MinimalistParallaxModule;
function MinimalistParallaxModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MinimalistParallaxModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MinimalistParallaxModule.ctorParameters;
}
//# sourceMappingURL=module.js.map