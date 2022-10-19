class TodoItem {
	constructor(public id: number, public content: string, public isDone: boolean) {}

	static create({ id, content, isDone }: { id: number; content: string; isDone?: boolean }) {
		return new TodoItem(id, content, isDone || false);
	}
}

export default TodoItem;
