var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { TaxRateService } from './tax-rate.service';
var SalesTaxService = (function () {
    function SalesTaxService(rateService) {
        this.rateService = rateService;
    }
    SalesTaxService.prototype.getVAT = function (value) {
        var amount = (typeof value === 'string') ?
            parseFloat(value) : value;
        return (amount || 0) * this.rateService.getRate('VAT');
    };
    return SalesTaxService;
}());
SalesTaxService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [TaxRateService])
], SalesTaxService);
export { SalesTaxService };
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=sales-tax.service.js.map