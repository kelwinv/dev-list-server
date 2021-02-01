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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Repos_1 = __importDefault(require("./Repos"));
let Users = class Users {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Users.prototype, "login", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Users.prototype, "avatar_url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Users.prototype, "bio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Users.prototype, "public_repos", void 0);
__decorate([
    typeorm_1.OneToMany(() => Repos_1.default, repos => repos.Users, {
        cascade: ['insert', 'update']
    }),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", Array)
], Users.prototype, "repos", void 0);
Users = __decorate([
    typeorm_1.Entity('users')
], Users);
exports.default = Users;
