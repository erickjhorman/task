import http from '../http-common';

class TaskDataService {
  getAll() {
    return http.get('/task');
  }

  getOne(id) {
    return http.get(`/task/${id}`);
  }

  saveTask(data) {
    return http.post('/task', data);
  }

  updateTask(id, data) {
    return http.put(`/task/${id}`, data);
  }
  deleteTask(id) {
    return http.delete(`/task/${id}`);
  }
}

export default new TaskDataService();
