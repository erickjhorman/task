<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link :to="{ path: '/tasks' }">
        <a class="navbar-brand">
          <img
            src="./assets/logo.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
            loading="lazy"
          />
          <img
            src="./assets/nest-js.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt
            loading="lazy"
          />
          CRUD DE TAREAS
        </a>
      </router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ path: '/add' }">
            <a class="nav-link">Add</a>
          </router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
    <notifications group="create" position="bottom right" />
    <notifications group="update" position="bottom right" />
    <notifications group="delete" position="bottom right" />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
