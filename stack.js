class Stack {
	
	constructor() {
		this.items = [];
		this.length = 0;
	}

	push(item) {
		this.items[this.length] = item
		this.length += 1
		return this.length
	}

	pop() {
		if(this.length == 0) return undefined;
		const item = this.items[this.length - 1]
		delete this.items[this.length - 1]
		this.length -= 1
		return item
	}

	print() {
		let output = '';
		for(let i = this.length-1; i >= 0; i--){
			let separator = '';

			if(i > 0) {
				separator = ' -> '
			}

			output += `${this.items[i]}${separator}`
		}

		return output;
	}

	peek() {
		if(this.isEmpty()) return null;

		return this.items[this.length-1];
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.length === 0;
	}

	clear() {
		this.items = [];
		this.length = 0;
	}
}

const stack = new Stack();

console.log(stack.isEmpty())

stack.push(10);
stack.push(500);
stack.push(20)
stack.push(40)
console.log(stack.print())
console.log(stack.size())
console.log(stack.peek())
stack.clear()
console.log(stack.print())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())