<template>
<div class='container'>
  <h1>Lista de tareas</h1>
    <table class="table table-bordered" style="width:100%">
      <tr class="thead-dark">
        <th>Nombre</th>
        <th>Completar</th>
        <th>Ver</th>
        <th>Editar</th>
        <th>Eliminar</th>
      </tr>
      <template v-for="todo in todolist">
      <tr :key="todo.id">
          <td>{{ todo.title }}</td>
          <td>
            <Button class="btn btn-success" @click="completeToDo(todo)">
              <img src="../assets/marca-de-verificacion.svg">
            </Button>
          </td>
          <td>
            <router-link :to="{name:'view', params: {id:todo.id}}" class="btn btn-info" append>
              <img src="../assets/ojo.svg">
            </router-link>
          </td>
          <td>
            <router-link :to="{name:'edit', params: {id:todo.id}}" class="btn btn-primary" append>
              <img src="../assets/editar.svg">
            </router-link>
          <td>
            <Button class="btn btn-danger" @click="removeToDo(todo.id)">
              <img src="../assets/signo-de-la-cruz.svg">
            </Button>
          </td>
      </tr>
      </template>
    </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ToDoList',
  data () {
    return {
      todolist: [],
      url: process.env.VUE_APP_TODOS_URL
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      axios
        .get(this.url)
        .then(response => (this.todolist = response.data))
    },
    removeToDo (id) {
      if (confirm('Está seguro que desea borrar esta tarea?')) {
        axios.delete(this.url + id, {}).then(() => this.getList())
      }
    },
    addNewToDo (todo) {
      axios.post(this.url, {
        todo
      }).then(() => this.getList())
    },
    completeToDo (todo) {
      if (confirm('Desea completar esta tarea?')) {
        todo = true
      }
    },
    viewToDo (i) {
      var item
      for (item in this.todolist) {
        if (item.id === i) {
          return item
        }
      }
      return new Error()
    }
  }
}
</script>
