/* eslint-disable @typescript-eslint/no-explicit-any */

function Action() {
	return function (_: any, _2: string, descriptor: PropertyDescriptor) {
		const orgianalFunc = descriptor.value;

		const newFunc = function (this: any, ...args: any[]) {
			this.update();
			orgianalFunc.apply(this, args);
		};

		const adjacentDescriptor: PropertyDescriptor = {
			configurable: false,
			enumerable: false,
			get() {
				return newFunc;
			},
		};

		return adjacentDescriptor;
	};
}

export default Action;
