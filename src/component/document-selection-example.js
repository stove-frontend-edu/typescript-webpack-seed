export class DocumentSelectionExample {
    constructor(
        configuration = {}
    ) {
        this.numbers = [1, 3, 4, 7, 9, 10, 12];
        this.init();
    }

    init() {
        this.selection();
    }

    selection() {
        document.querySelector('#result').innerText = "콘솔확인";
    }
}