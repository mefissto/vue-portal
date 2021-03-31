import { createApp } from 'vue';
import { createStore } from 'vuex';

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Sidebar from 'primevue/sidebar';
import Card from 'primevue/card';

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import 'primeflex/primeflex.css';

import App from './App.vue';
import router from './router';
import ToastMixin from './mixins/ToastMixin';
import Store from './store/store';

const app = createApp(App);
const store = createStore(Store);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Sidebar', Sidebar);
app.component('Card', Card);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);

app.mixin(ToastMixin);

app.mount('#app');
