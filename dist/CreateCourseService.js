"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, educator, duration = 8 }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService;
