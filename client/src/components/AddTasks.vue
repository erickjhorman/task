<template>
  <div class="container d-flex justify-content-center">
    <div class="card" style="width: 20rem;  ">
      <div class="card-body">
        <h5 class="card-title text-center">Add Task</h5>
        <form @submit.prevent="addTask">
          <div class="form-group">
            <input
              type="text"
              v-model="task.name"
              placeholder="Your task here"
              class="form-control"
              required
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
              required
              data-error="Please enter any description."
            />
            <small id="nameHelp" class="form-text text-muted"
              >Enter a description betwen 10 and 150 characteres.</small
            >
            <div class="help-block with-errors"></div>
          </div>
          <button class="btn btn-primary btn-block">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TaskDataService from '../services/tasksService';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap-validator';

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
      errors: [],
      message: '',
    };
  },

  methods: {
    addForm: function() {
      if (this.task.name && this.task.description) return true;
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.description) {
        this.errors.push('Description required.');
      }
    },

    addTask() {
      this.addForm();

      var data = {
        name: this.task.name,
        description: this.task.description,
      };

      TaskDataService.saveTask(data)
        .then(response => {
          console.log(response);
          this.submitted = true;
          //this.task = new Task();
          this.message = response.data.message;
          this.$notify({
            group: 'create',
            text: this.message,
          });

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
