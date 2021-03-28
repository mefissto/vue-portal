import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import 'primeflex/primeflex.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.component('InputText', InputText);
app.component('Button', Button);

app.use(router);
app.use(PrimeVue);

app.mount('#app');
