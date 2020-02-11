class Stack<T> {
    private elements: T[] = [];

    public push(element: T): void {
        this.elements.push(element);
    }

    public pop(): (T | undefined) {
        return this.elements.pop();
    }

    public peek(): (T | undefined) {
        if (!this.empty()) {
            return this.elements[this.elements.length - 1];
        }
    }

    public empty(): boolean {
        return !this.elements.length;
    }

    public size(): number {
        return this.elements.length;
    }
}

export default Stack;
