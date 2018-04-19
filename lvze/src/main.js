import Vue from 'vue';
import app from './components/app.vue';
import ajax from '../tools/ajax.js';

Vue.prototype.$ajax = ajax;

new Vue({
    el: '#app',
    template: "<div><App /></div>",
    components: {
        App: app
    }
})