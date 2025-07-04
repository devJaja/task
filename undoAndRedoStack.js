class UndoRedo {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.items = [];
        this.length = 0;
        this.state = ""; 
    }

    push(item) {
        this.items[this.length] = item
        this.length += 1
        return this.length
    }

	pop() {
		if(this.isEmpty) return undefined;
		const item = this.items[this.length - 1]
		delete this.items[this.length - 1]
		this.length -= 1
		return item
	}

    isEmpty() {
		return this.length === 0;
	}

    performAction(action) {
        this.undoStack.push(this.state);   
        this.state = action;               
        this.redoStack = [];               
    }

    undo() {
        if (this.undoStack.isEmpty) {
        console.log("undo is empty");
        return;
        }
        this.redoStack.push(this.state);   
        this.state = this.undoStack.pop(); 
    }

    redo() {
        if (this.redoStack.isEmpty) {
        console.log("redo is empty");
        return;
        }
        this.undoStack.push(this.state);   
        this.state = this.redoStack.pop();
    }

    getState() {
        return this.state;
    }
}

const editor = new UndoRedo();

editor.performAction("Hello");
editor.performAction("Hello world ")
editor.performAction("Hello world2")
console.log(editor.getState()); 

editor.undo();
console.log(editor.getState()); 

editor.redo()
console.log(editor.getState()); 


