function LinkedList() {
	let head = null;

	const append = (value) => {
		if (head == null) {
			head = Node(value, null)
		} else {
			let currentNode = head;
			while(currentNode.pointer !== null) {
				currentNode = currentNode.pointer;
			}
			currentNode.pointer = Node(value, null)
		}

	}

	const prepend = (value) => {
		let tmpNode = Node(value, head);
		head = tmpNode;
	}

	const size = () => {
		let count = 0;
		let currentNode = head;
		while(currentNode.pointer !== null) {
			count++;
			currentNode = currentNode.pointer;
		}
		return count;
	}

	const headNode = () => {
		return head;
	}

	const tailNode = () => {
		let currentNode = head;
			while(currentNode.pointer !== null) {
				currentNode = currentNode.pointer;
			}
		return currentNode;
	}

	const at = (index) => {
		if (index < 0) return;
		if (index = 0) return head;
		let currentNode = head;
		for(let i = 0; i < index; i++) {
			currentNode

		}
	}
}

function Node(value, nextNode) {
	return { 
		value: value || null, 
		pointer: pointer || null
	};
}


/*
Sample Linked List:
linkedList {

	value: this is the first node,
	pointer: {

		value: this is the next node,
		pointer: {

			value: this is the last node,
			pointer: null

		}
	}
}
*/
