var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SalesTaxService } from './sales-tax.service';
import { TaxRateService } from './tax-rate.service';
var SalesTaxComponent = (function () {
    function SalesTaxComponent(salesTaxService) {
        this.salesTaxService = salesTaxService;
    }
    SalesTaxComponent.prototype.getTax = function (value) {
        return this.salesTaxService.getVAT(value);
    };
    return SalesTaxComponent;
}());
SalesTaxComponent = __decorate([
    Component({
        selector: 'sales-tax',
        template: "\n    <h2>Sales Tax Calculator</h2>\n    Amount: <input #amountBox (change)=\"0\">\n\n    <div *ngIf=\"amountBox.value\">\n    The sales tax is\n     {{ getTax(amountBox.value) | currency:'USD':true:'1.2-2' }}\n    </div>\n  ",
        providers: [SalesTaxService, TaxRateService]
    }),
    __metadata("design:paramtypes", [SalesTaxService])
], SalesTaxComponent);
export { SalesTaxComponent };
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=sales-tax.component.js.map