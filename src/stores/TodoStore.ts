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

	@Action()
	addItem(content: string) {
		const newTodo = TodoItem.create({
			id: this._todo.length,
			content,
		});

		this._todo.push(newTodo);
	}
}

export default TodoStore;
