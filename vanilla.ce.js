// 透過 ES2015 的 class 語法繼承 HTMLElement 來創建 custom element
class HelloWorld extends HTMLElement {
   
    constructor() {
        super()
        this.name = 'World!'
    }

    // 2. 透過以下方法監聽屬性
    static get observedAttributes() {
        return ['name']
    }
    // 2-1. 屬性改變後會呼叫以下函式做處理
    attributeChangedCallback(property, oldVal, newVal) {
        if (oldVal === newVal) return;
        this[property] = newVal;
        this.renderText()
    }

    // life cycle:  invoked when the element is added to a document.
    connectedCallback() {
        this.renderText()

        // 4. shadow DOM: encapsulate the component from outside interference
        // const shadow = this.attachShadow({ mode: 'closed' });
        // shadow.innerHTML = `
        // <style>
        //   p {
        //     text-align: center;
        //     font-weight: normal;
        //     padding: 1em;
        //     margin: 0 0 2em 0;
        //     background-color: #eee;
        //     border: 1px solid #666;
        //   }
        // </style>
    
        // <p>Hello ${ this.name }!</p>`;

        // 5-1. HTML template 
        // const template = document.getElementById('hello-world').content.cloneNode(true)
        // const hwMsg = `Hello ${ this.name }`;
    
        // Array.from(template.querySelectorAll('.hw-text'))
        //         .forEach( n => n.textContent = hwMsg );
    
        // shadow.append(template);

        // 6. add custom event
        // this.customEvent = new CustomEvent('customEvent', {
        //     detail: {
        //         info: 'product is ready!'
        //     }
        // })

        // this.btn = document.createElement('button')
        // this.btn.innerText = '按鈕觸發客製化事件'
        // this.btn.addEventListener('click', () => {
        //     window.dispatchEvent(this.customEvent)
        // })
        // shadow.appendChild(this.btn)
    
    }

    renderText() {
        this.innerText = `Hello ${this.name}`;
    }
}

// web api 提供的方式註冊 custom element
customElements.define('hello-world', HelloWorld)

// 7. 做好的 web component 也可以在 vue 裡面使用
// 8. 用 vue 做的經過打包後，也可以在原生環境下使用 