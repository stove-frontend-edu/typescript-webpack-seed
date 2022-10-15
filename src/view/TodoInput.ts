import { Observer } from '@/decorators';
import TodoStore from '@/stores/TodoStore';

@Observer()
class TodoInput {
	stores = {
		todoStore: new TodoStore(),
	} as const;
	$root: Element;
	$inputContainer: HTMLDivElement;

	constructor({ root }: { root: Element }) {
		this.$root = root;

		this.$inputContainer = document.createElement('div');
		this.$inputContainer.setAttribute('class', 'input-wrapper');
		this.$root.appendChild(this.$inputContainer);
	}

	private bindEvent() {
		this.bindInputEvent();
	}

	private bindInputEvent() {
		const form = document.querySelector('.todo-form')! as HTMLFormElement;

		form.addEventListener('submit', (e) => {
			const $newTodoInput = form['todo-input'] as HTMLInputElement;

			if ($newTodoInput.value) {
				this.stores.todoStore.addItem($newTodoInput.value);
			}

			e.preventDefault();
		});
	}

	private inputTemplate() {
		return /* html */ `
            <form class="todo-form">
                <input class="todo-input" type="text" name="todo-input"/>
                <button class="enroll-btn" type="submit">추가</button>
            </form>
        `;
	}

	render() {
		this.$inputContainer.innerHTML = this.inputTemplate();

		this.bindEvent();
	}
}

export default TodoInput;
