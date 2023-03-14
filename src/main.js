import { createApp } from 'vue'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import Menubar from 'primevue/menubar';
import router from './router/router.js'

const app =createApp(App)



app.use(PrimeVue);
app.use(router);
app.component('Menubar', Menubar);

app.mount('#app')
