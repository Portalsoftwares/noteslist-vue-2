import { createRouter, createWebHashHistory } from 'vue-router';

import NotesView from '../Views/NotesView.vue';
import StatsView from '../Views/StatsView.vue';
import EditNoteView from '../Views/EditNoteView.vue';
import AuthView from '../Views/AuthView.vue';
import AboutView from '../Views/AuthView.vue';
const routes = [
  {
    path: '/',
    component: AboutView,
    name: 'about'
  },
  {
    path: '/edit-note/:id',
    component: EditNoteView,
    name: 'editNote'
  },
  {
    path: '/stats',
    component: StatsView,
    name: 'stats'
  },
  {
    path: '/auth',
    component: AuthView,
    name: 'auth'
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
