import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import Markdown from 'vue3-markdown-it';
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

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

// Register a global custom directive called v-ripple
app.directive('ripple', {
  // When the bound element is inserted into the DOM...
  mounted: (el) => {
    // listen for click events to trigger the ripple
    el.addEventListener('click', (e) => {
      // Setup
      const target = el.getBoundingClientRect();
      const buttonSize = target.width > target.height ? target.width : target.height;
      // remove any previous ripple containers
      const elements = document.getElementsByClassName('ripple');
      while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
      }

      // create the ripple container and append it to the target element
      const ripple = document.createElement('span');
      ripple.setAttribute('class', 'ripple');
      el.appendChild(ripple);

      console.log(e);

      // set the ripple container to the click position and start the animation
      setTimeout(() => {
        ripple.style.width = `${buttonSize}px`;
        ripple.style.height = `${buttonSize}px`;
        ripple.style.top = `${e.offsetY - buttonSize / 2}px`;
        ripple.style.left = `${e.offsetX - buttonSize / 2}px`;
        ripple.setAttribute('class', 'ripple ripple-effect');
      }, 100);
    });
  },
}).use(Markdown).use(router).mount('#app');
