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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TodoService = class TodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async getAllTodos() {
        return await this.todoModel.find();
    }
    async getSingleTodo(id) {
        return await this.todoModel.findById({ id });
    }
    async deleteTodo(id) {
        try {
            await this.todoModel.deleteOne({ _id: id });
        }
        catch (e) {
            console.log(e);
        }
        return 'deleted';
    }
    async updateTodo(id, body) {
        try {
            console.log('Body1', body, 'id ', id);
            await this.todoModel.findByIdAndUpdate(id, { $set: body }, { new: true });
        }
        catch (e) {
            console.log('Something went wrong');
        }
        return `Updated`;
    }
    async addTodo(todo) {
        try {
            await this.todoModel.create(todo);
        }
        catch (e) {
            console.log('Something went wrong');
        }
        return 'Todo added';
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Todo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodoService);
//# sourceMappingURL=todo.service.js.map