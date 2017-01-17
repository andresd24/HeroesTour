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
import { Logger } from './logger.service';
import { Hero } from './hero';
var HEROES = [
    new Hero('Windstorm', 'Weather mastery'),
    new Hero('Mr. Nice', 'Killing them with kindness'),
    new Hero('Magneta', 'Manipulates metalic objects')
];
var BackendService = (function () {
    function BackendService(logger) {
        this.logger = logger;
    }
    BackendService.prototype.getAll = function (type) {
        if (type === Hero) {
            // TODO get from the database
            return Promise.resolve(HEROES);
        }
        var err = new Error('Cannot get object of this type');
        this.logger.error(err);
        throw err;
    };
    return BackendService;
}());
BackendService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Logger])
], BackendService);
export { BackendService };
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=backend.service.js.map