import TodoItem from '@/model/TodoItem';
import BaseStore from '@/stores/BaseStore';
import { Action, Observable } from '@/decorators';

@Observable()
class TodoStore extends BaseStore {
	private _todo: TodoItem[] = [];

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
			id: this._todo.length === 0 ? 0 : this._todo.at(-1)!.id + 1,
			content,
		});

		this._todo.push(newTodo);
	}

	@Action()
	toggleDoneState(id: number) {
		const newTodos = [...this._todo];
		newTodos.forEach((item) => {
			if (item.id === id) item.isDone = !item.isDone;
		});
		this._todo = newTodos;
	}

	@Action()
	deleteItem(id: number) {
		const newTodos = [...this._todo].filter((item) => item.id !== id);
		this._todo = newTodos;
	}
}

export default TodoStore;
