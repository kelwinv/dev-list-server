"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let Repos = class Repos {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Repos.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Repos.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Repos.prototype, "html_url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Repos.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Repos.prototype, "language", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Repos.prototype, "stargazers_count", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Users_1.Users, user => user.repos),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", Users_1.Users)
], Repos.prototype, "Users", void 0);
Repos = __decorate([
    typeorm_1.Entity()
], Repos);
exports.Repos = Repos;
