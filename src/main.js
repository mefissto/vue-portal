import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Sidebar from 'primevue/sidebar';

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import 'primeflex/primeflex.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ToastMixin from './mixins/ToastMixin';

const app = createApp(App);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Sidebar', Sidebar);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);

app.mixin(ToastMixin);

app.mount('#app');
