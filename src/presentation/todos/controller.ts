import { Request, Response, } from "express";
import { prisma } from "../../data/postgresDb";
import { CreateTodoDto } from '../../domain/dtos/todos/create-todo.dto';
import { UpdateTodoDto } from '../../domain/dtos/todos/update-todo.dto';

export class TodosController {

	//* DI
	constructor() {}

	public getTodos = async ( req: Request, res: Response) => {

		const allTodos = await prisma.todo.findMany()
		return res.json( allTodos );
	}

	public getTodoById = async ( req: Request, res: Response ) => {
		const id = +req.params.id;
		if ( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number'})

		const todo = await prisma.todo.findFirst({
			where: { id }
		});

		(todo)
		? res.json( todo )
		: res.status(404).json({ error: `TODO with id ${ id } not found` })		
	}

	public createTodo = async ( req: Request, res: Response ) => {
		const [ error, createTodoDto ] = CreateTodoDto.create( req.body )

		if( error )  return res.status(400).json({ error })

		const newTodo = await prisma.todo.create({
			data: createTodoDto!
		})

		res.json({ description:'Register created', newTodo })
	}

	public updateTodo = async ( req: Request, res: Response ) => {
		
		const id = +req.params.id;
		const [ error, updateTodoDto] = UpdateTodoDto.create({...req.body, id})
		
		if( error )  return res.status(400).json({ error })
		
		const todo = await prisma.todo.findFirst({
			where: { id }
		});

		if ( !todo ) return res.status(404).json( { error: `Todo with id ${ id } not found`} );

		const updatedTodo = await prisma.todo.update({
			where: { id },
			data: updateTodoDto!.values
		});

		res.json(updatedTodo)
	}

	public deteletTodo = async ( req: Request, res: Response ) => {
		const id = +req.params.id;
		if ( isNaN(id) ) return res.status(400).json({ error: 'ID argument is not a number'})
		
		const todo = await prisma.todo.findFirst({
			where: { id }
		});

		if ( !todo ) return res.status(404).json( { error: `Todo with id ${ id } not found`} );

		const deleted = await prisma.todo.delete({
			where: { id }
		});

		(deleted)
		? res.json( deleted )
		: res.status(400).json({ error: `TODO with id ${ id } not found` })		

		res.status(200).json({ description: 'Register deleted', deleted});
	}

}