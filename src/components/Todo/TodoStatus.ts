import { Observer } from '@/decorators';

import TodoStore from '@/stores/TodoStore';

@Observer()
class TodoStatus {
	stores = {
		todoStore: new TodoStore(),
	} as const;
	root: Element;
	$todoStatusContainer: HTMLDivElement;

	constructor({ root }: { root: Element }) {
		this.root = root;

		this.$todoStatusContainer = document.createElement('div');
		this.$todoStatusContainer.setAttribute('class', 'todo-status-wrapper');

		this.root.appendChild(this.$todoStatusContainer);
	}

	private todoStatusTemplate() {
		const { todoStore } = this.stores;

		const todoStatus = /* html */ `
			<div>
				<span>
					전체 ${todoStore.todo.length} 중 ${todoStore.doneTodo.length} 개 완료
				<span>
			</div>
		`;

		return todoStore.todo.length > 0 ? todoStatus : '';
	}

	render() {
		this.$todoStatusContainer.innerHTML = this.todoStatusTemplate();
	}
}

export default TodoStatus;
