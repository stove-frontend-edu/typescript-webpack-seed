import './main-style.css';

import TodoView from './view/TodoView';

const excute = () => {
	const app = document.querySelector('#app')!;

	new TodoView({ root: app });
};

excute();
