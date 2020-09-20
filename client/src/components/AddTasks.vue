<template>
  <div class="container d-flex justify-content-center">
    <div class="card" style="width: 20rem;  ">
      <div class="card-body">
        <h5 class="card-title text-center">Add Task</h5>
        <form
          @submit.prevent="addTask"
          data-toggle="validator"
          novalidate="true"
        >
          <div class="form-group">
            <input
              type="text"
              v-model="task.name"
              placeholder="Your task here"
              class="form-control"
              required="required"
              data-error="Please enter your  name."
            />
            <small id="nameHelp" class="form-text text-muted"
              >Enter a name betwen 5 and 30 characteres.</small
            >
            <div class="help-block with-errors"></div>
          </div>
          <div class="form-group">
            <input
              type="text"
              v-model="task.description"
              placeholder="Your description here"
              class="form-control"
              required="required"
              data-error="Please enter any description."
            />
            <small id="nameHelp" class="form-text text-muted"
              >Enter a description betwen 10 and 150 characteres.</small
            >
            <div class="help-block with-errors"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
    <!-- Toast-->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="..." />
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</template>

<script>
import TaskDataService from '../services/tasksService';

class Task {
  constructor(name, description) {
    (this.name = name), (this.description = description);
  }
}

export default {
  name: 'addTask',
  data() {
    return {
      task: new Task(),
      submitted: false,
      error: [],
      message: '',
    };
  },
  methods: {
    addTask() {
      var data = {
        name: this.task.name,
        description: this.task.description,
      };

      TaskDataService.saveTask(data)
        .then(response => {
          console.log(response);
          this.submitted = true;
          this.task = new Task();
          this.message = response.data.message;
          console.log(this.message);
          this.$router.push('tasks');
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
.has-error input[type='text'],
.has-error input[type='email'],
.has-error select {
  border: 1px solid #a94442;
}
</style>
