import { Observer } from '@/decorators';

import { TodoInput, TodoList, TodoStatus } from '@/components/Todo';

@Observer()
class TodoView {
	root: Element;
	$todo: Element;

	constructor({ root }: { root: Element }) {
		this.root = root;

		this.$todo = document.createElement('div');
		this.$todo.setAttribute('class', 'todo');
		this.root.appendChild(this.$todo);
	}

	render() {
		new TodoInput({ root: this.$todo });
		new TodoList({ root: this.$todo });
		new TodoStatus({ root: this.$todo });
	}
}

export default TodoView;
