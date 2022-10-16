import { Observer } from '@/decorators';

import { TodoInput, TodoList, TodoStatus } from '@/components/Todo';

@Observer()
class TodoView {
	root: Element;

	constructor({ root }: { root: Element }) {
		this.root = root;
	}

	render() {
		new TodoInput({ root: this.root });
		new TodoList({ root: this.root });
		new TodoStatus({ root: this.root });
	}
}

export default TodoView;
