import Vue from 'vue'
import Layout from './components/layout/layout.vue'
import ajax from './tools/ajax'
import './index.css'
Vue.prototype.Ajax = ajax
new Vue({
    el: '#app',
    template: '<div><Layout></Layout></div>',
    components: {
        Layout
    }
})