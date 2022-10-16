import { Observer } from '@/decorators';
import TodoStore from '@/stores/TodoStore';

@Observer()
class TodoList {
	stores = {
		todoStore: new TodoStore(),
	} as const;
	root: Element;
	$todoContainer: HTMLDivElement;

	constructor({ root }: { root: Element }) {
		this.root = root;

		this.$todoContainer = document.createElement('div');
		this.$todoContainer.setAttribute('class', 'todo-wrapper');

		this.root.appendChild(this.$todoContainer);
	}

	private bindEvent() {
		const $todoList = document.querySelector('.todo-list')!;

		$todoList.addEventListener('click', ({ target }) => {
			if (!(target instanceof HTMLElement)) return;

			const curIndex = Number(target.closest('li')!.dataset.key);

			if (target instanceof HTMLInputElement) {
				this.stores.todoStore.toggleDoneState(curIndex);
			}
		});
	}

	private todoListTemplate() {
		const todo = this.stores.todoStore.todo;

		const todoList = todo
			.map((todoItem) => {
				return /* html */ `
                <li data-key=${todoItem.id} class="todo-item">
                    <input type="checkbox" ${todoItem.isDone ? 'checked' : ''}/>
                    <span>
                        ${todoItem.isDone ? `<del>${todoItem.content}</del>` : todoItem.content}
                    </span>
                    <button>
                        삭제
                    </button>
                </li>
            `;
			})
			.join('');

		return /* html */ `
            <ul class="todo-list">
                ${todoList}
            </ul>
        `;
	}

	render() {
		this.$todoContainer.innerHTML = this.todoListTemplate();
		this.bindEvent();
	}
}

export default TodoList;
