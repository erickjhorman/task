<template>
  <div class="container d-flex justify-content-center">
    <div class="card" style="width: 20rem;  ">
      <div class="card-body">
        <h5 class="card-title text-center">Edit Task</h5>
        <form @submit.prevent="updateTask">
          <div class="form-group">
            <input
              type="text"
              placeholder="Your task here"
              class="form-control"
              required="required"
              v-model="task.name"
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
              placeholder="Your description here"
              class="form-control"
              required="required"
              v-model="task.description"
              data-error="Please enter any description."
            />

            <div class="help-block with-errors"></div>
            <small id="nameHelp" class="form-text text-muted"
              >Enter a description betwen 10 and 150 characteres.</small
            >
          </div>
          <button type="submit" class="btn btn-primary btn-block">Edit</button>
        </form>
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
  name: 'app',
  data() {
    return {
      tasks: [],
      id: 0,
      task: new Task(),
      submitted: false,
      message: '',
    };
  },
  methods: {
    getTask(id) {
      TaskDataService.getOne(id).then(response => {
        this.task = new Task(response.data.name, response.data.description);
        console.log(response);
        console.log(this.tasks);
      });
    },
    updateTask() {
      var data = {
        name: this.task.name,
        description: this.task.description,
      };

      TaskDataService.updateTask(this.id, data)
        .then(response => {
          console.log(response);
          this.submitted = true;
          this.task = new Task();

          this.message = response.data.message;
          this.$notify({
            group: 'create',
            text: this.message,
          });

          this.$router.push({ name: 'tasks' });
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;

    this.getTask(this.id);
  },
};
</script>
