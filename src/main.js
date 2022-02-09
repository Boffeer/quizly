import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCk1GJ8TMlMQAYznmjputeDHfZUWEL9ZHw',
  authDomain: 'boffeer-quiz.firebaseapp.com',
  projectId: 'boffeer-quiz',
  storageBucket: 'boffeer-quiz.appspot.com',
  messagingSenderId: '664691323425',
  appId: '1:664691323425:web:93e975a375eb60b7d5a960',
  measurementId: 'G-VYVJN6WX2V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

createApp(App).mount('#app');
