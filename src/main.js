import Vue from 'vue'
import App from './App.vue'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-dark.css';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
