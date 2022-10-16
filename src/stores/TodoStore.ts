import TodoItem from '@/model/TodoItem';
import BaseStore from '@/stores/BaseStore';
import { Action, Observable } from '@/decorators';

@Observable()
class TodoStore extends BaseStore {
	private _todo: TodoItem[] = [
		TodoItem.create({
			id: 0,
			content: '청소',
		}),
	];

	constructor() {
		super();
	}

	get todo() {
		return this._todo;
	}

	get doneTodo() {
		return this._todo.filter((item) => item.isDone);
	}

	@Action()
	addItem(content: string) {
		const newTodo = TodoItem.create({
			id: this._todo.length,
			content,
		});

		this._todo.push(newTodo);
	}

	@Action()
	toggleDoneState(index: number) {
		const newTodos = [...this._todo];
		newTodos[index].isDone = !newTodos[index].isDone;
		this._todo = newTodos;
	}

	@Action()
	deleteItem(index: number) {
		const newTodos = [...this._todo].filter((_, idx) => idx !== index);
		this._todo = newTodos;
	}
}

export default TodoStore;
