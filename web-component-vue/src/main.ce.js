import { defineCustomElement } from "vue";
import MyVueCustomEls from './elements/MyVueCustomEls.ce.vue'

window.customElements.define('my-vue-custom-els', defineCustomElement(MyVueCustomEls))
