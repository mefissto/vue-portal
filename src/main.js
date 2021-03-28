import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Password from 'primevue/password';
import ToastService from 'primevue/toastservice';

import 'primeflex/primeflex.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
