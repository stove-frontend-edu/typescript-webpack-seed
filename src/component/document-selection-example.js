export class DocumentSelectionExample {
    
    currentAction           //action은 그냥 단순 타입 형태
    store = {               //store가 dispatcher에 callback등록하는 건 모르겠어서 고정
        counter: new Counters()
    }

    constructor() {
        this.init();
    }

    init() {
        this.render();
        this.setOnClickEvent();
    }

    render(){
        const elem = document.querySelector('#result')
        elem.innerHTML=`
            <div>
                Counter
                <button id="button1">+</button>
                <button id="button2">-</button>
                <span id="answer">${this.store.counter.value}</span>
            </div>
        `
    }

    setOnClickEvent(){
        document.querySelector('#button1').addEventListener('click', () => {
            this.currentAction = 'plus'
            this.dispatcher();
        })

        document.querySelector('#button2').addEventListener('click', () => {
            this.currentAction = 'minus'
            this.dispatcher();
        })
    }

    // 모든 store에 action 전송
    dispatcher(){
        let anyChange = false;
        for (const index in this.store) {
            const isChanged = this.store[index].action(this.currentAction) //스스로 갱신
            anyChange = isChanged && true;
        }
        if(anyChange) this.controllerView();
    }
    
    controllerView(){
        this.init();
    }
}

class Counters{ //Store의 일종
    
    value

    constructor() {
        this.value = 0;
    }
    
    action = (actionType) => { // Store 공통 구현
        console.log("GET ACTION", actionType)
        switch (actionType) {
            case 'plus':
                this.value = this.value +1;
                return true;
            case 'minus':
                this.value = this.value -1;
                return true;
            default:
                break;
        }
        return false;
    }    
}