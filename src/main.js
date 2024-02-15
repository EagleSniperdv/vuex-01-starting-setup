import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter:0
        }
    },

    mutations: {
        increment(state) {
            setTimeout(() => {
                state.counter++;
            },2000);
            
        },

        increase(state,payload) {
            state.counter = state.counter + 2 + payload.value;
        }
    },

    actions: {
        
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
