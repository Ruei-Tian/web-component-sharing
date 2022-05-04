

class HelloWorld extends HTMLElement {
    // 2. 讓內容可以隨著 attribute 客製化
    constructor() {
        super()
        this.name = 'World!'
    }

    static get observedAttributes() {
        return ['name']
    }

    attributeChangedCallback(property, oldVal, newVal) {
        if (oldVal === newVal) return;
        this[property] = newVal;
        this.renderText()
    }

    // 1. life cycle:  invoked when the element is added to a document.
    connectedCallback() {
        // this.textContent = `Hello World`;
        this.renderText()

        // 4. shadow DOM: encapsulate the component from outside interference
        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.innerHTML = `
        <style>
          p {
            text-align: center;
            font-weight: normal;
            padding: 1em;
            margin: 0 0 2em 0;
            background-color: #eee;
            border: 1px solid #666;
          }
        </style>
    
        <p>Hello ${ this.name }!</p>`;

        // 5-1. 
        // const template = document.getElementById('hello-world').content.cloneNode(true)
        // const hwMsg = `Hello ${ this.name }`;
    
        // Array.from( template.querySelectorAll('.hw-text') )
        //         .forEach( n => n.textContent = hwMsg );
    
        // shadow.append( template );
    
    }

    renderText() {
        this.textContent = `Hello ${this.name}`;
    }
}

customElements.define('hello-world', HelloWorld)