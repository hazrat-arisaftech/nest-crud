import { TodoService } from './todo.service';
import { Todo } from './model.todo';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    addTodo(body: any): Promise<string>;
    getAllTodos(): Promise<Todo[]>;
    getSingleTodo(params: any): Promise<Todo>;
    deleteTodo(params: any): Promise<String>;
    updateTodo(params: any, body: any): Promise<String>;
}
