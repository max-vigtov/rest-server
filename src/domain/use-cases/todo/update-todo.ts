import { UpdateTodoDto } from "../../dtos/todos/update-todo.dto";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface UpdateTodoUseCase {
	execute( dto: UpdateTodoDto ): Promise<TodoEntity>
}

export class UpdateTodo implements UpdateTodoUseCase {

	constructor( 
		private readonly repository: TodoRepository,
	) {}

	execute(dto: UpdateTodoDto): Promise<TodoEntity> {
		return this.repository.create(dto)
	}

}