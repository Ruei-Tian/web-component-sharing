class MyCustomEl extends HTMLElement {
    static style = `
        .my-js-custom-el {
            background-color: pink;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 200px;

        }
    
    `
    constructor() {
        super()
        // this.innerText = 'hihihi'
        // 開啟 shadowRoot 隔離樣式
        this.attachShadow({mode: 'open'})
        this.func = this.customFunc
        this.styling()
        this.render()
       
    }

    connectedCallback() {
        this.textContent = 'Hello World!';
      }

    styling() {
        this.stylesheet = document.createElement('style')
        this.stylesheet.textContent = this.constructor.style
        this.shadowRoot.appendChild(this.stylesheet)
    }

    render() {
        this.btn = document.createElement('div')
        this.btn.classList.add('my-js-custom-el')
        this.btn.textContent = 'My Web Component By JS!'
        this.btn.addEventListener('click', this.clickHandler.bind(this))
        this.btn.func = this.customFunc
        this.shadowRoot.appendChild(this.btn)
    }

    clickHandler() {
        if(!this.hint) {
            this.hint = document.createElement('p')
            this.hint.textContent = 1
            this.shadowRoot.appendChild(this.hint)
        } else {
            this.hint.textContent = parseInt(this.hint.textContent) + 1
        }
    }

    customFunc() {
        console.log('call!');
    }
}

// 創建 custom element
window.customElements.define('my-js-custom-el', MyCustomEl)
