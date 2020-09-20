import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tasks',
      alias: '/tasks',
      name: 'tasks',
      component: () => import('./components/ListTasks.vue'),
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./components/editTasks.vue'),
    },

    {
      path: '/add',
      name: 'add',
      component: () => import('./components/AddTasks.vue'),
    },
  ],
});
