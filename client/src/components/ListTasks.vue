<template>
  <div class="container" v-if="tasks.length > 0">
    <div class="row">
      <div class="col-md-4" v-for="task in tasks" :key="task.id">
        <div class="card mt-3 ml-2 animate__animated animate__fadeInDown">
          <div class="card-body">
            <span class="badge badge-pill badge-primary">{{ task.id }}</span>
            <div>
              <div style="display: inline-block;">
                <p>Name Task :</p>
              </div>
              <div style="display: inline-block;">
                <p class="ml-2">{{ task.name }}</p>
              </div>
            </div>
            <div>
              <div style="display: inline-block;">
                <p>Description Tasks :</p>
              </div>
              <div style="display: inline-block;">
                <p class="ml-2">{{ task.description }}</p>
              </div>
            </div>
          </div>

          <router-link :to="{ path: '/edit/' + task.id }">
            <a class="btn btn-warning btn-block mb-2">
              <i class="fas fa-marker"></i>
            </a>
          </router-link>

          <a class="btn btn-danger" @click="deleteTasks(task.id)">
            <i class="fas fa-trash-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="alert alert-info" role="alert">
    No Tasks please click on the
    <router-link :to="{ path: '/add' }">
      <a class="alert-link mr-2">Add</a> </router-link
    >button on the top bar to add one
    <i class="fas fa-bell fa-lg"></i>
  </div>
</template>

<script>
import TaskDataService from '../services/tasksService';

export default {
  name: 'app',
  data() {
    return {
      tasks: [],
      message: '',
    };
  },

  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
    getTasks() {
      TaskDataService.getAll().then(response => {
        this.tasks = response.data.data;
        console.log(response);
        console.log(this.tasks);
      });
    },
    deleteTasks(id) {
      TaskDataService.deleteTask(id)
        .then(response => {
          console.log('Task deleted', response);

          this.message = response.data.message;
          this.$notify({
            group: 'create',
            text: this.message,
          });

          this.getTasks();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>

<style></style>
