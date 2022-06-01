import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import {
  create, NCard, NConfigProvider, NSpace,
} from 'naive-ui';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
import router from './router';
import App from './App.vue';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl3ok6pi869bq01z1etqe6qui/master',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

// NAIVE UI
const naive = create({
  components: [
    NConfigProvider,
    NCard,
    NSpace,
  ],
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(naive).use(router).mount('#app');
