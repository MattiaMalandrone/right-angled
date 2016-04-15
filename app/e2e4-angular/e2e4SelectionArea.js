System.register(['angular2/core', 'e2e4/src/selectionManager'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, selectionManager_1;
    var E2E4SelectionArea;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (selectionManager_1_1) {
                selectionManager_1 = selectionManager_1_1;
            }],
        execute: function() {
            E2E4SelectionArea = (function () {
                function E2E4SelectionArea(el, selectionManager) {
                    this.multiple = true;
                    this.autoSelectFirst = false;
                    this.toggleOnly = false;
                    this.selectionManager = selectionManager;
                    this.nativeElement = el.nativeElement;
                }
                E2E4SelectionArea.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], E2E4SelectionArea.prototype, "multiple", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], E2E4SelectionArea.prototype, "autoSelectFirst", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], E2E4SelectionArea.prototype, "toggleOnly", void 0);
                E2E4SelectionArea = __decorate([
                    core_1.Directive({
                        providers: [selectionManager_1.SelectionManager],
                        selector: '[e2e4-selection-area]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, selectionManager_1.SelectionManager])
                ], E2E4SelectionArea);
                return E2E4SelectionArea;
            }());
            exports_1("E2E4SelectionArea", E2E4SelectionArea);
        }
    }
});
//# sourceMappingURL=e2e4SelectionArea.js.map