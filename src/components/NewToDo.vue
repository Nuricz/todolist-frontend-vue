<template>
<div>
<h1>Crear Tarea</h1>
<div class="container card" style="width: 30rem; padding: 15px;">
  <p v-if="errors.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
    </ul>
  </p>
    <form @submit.prevent="createNewToDo()">
      <div class="form-group">
        <label for="new-name">Nombre</label>
          <input class="form-control" v-model="nextName" type="text" id="new-name" placeholder="Nombre">
      </div>
      <div class="form-group">
        <label for="new-todo">Descripción</label>
          <textarea class="form-control" v-model="nextDescrip" id="new-descrip" placeholder="Descripción"></textarea>
      </div>
      <button class="btn btn-success">Agregar</button>
    </form>
</div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  title: 'NewToDo',
  data () {
    return {
      nextName: null,
      nextDescrip: null,
      todo: {
        title: String,
        description: String
      },
      errors: [],
      url: process.env.VUE_APP_TODOS_URL
    }
  },

  methods: {
    createNewToDo () {
      this.errors = []
      if (!this.nextName) {
        this.errors.push('Debe escribir un título')
      }
      if (!this.nextDescrip) {
        this.errors.push('Debe escribir una descripción')
      }
      if (this.nextName && this.nextDescrip) {
        this.$set(this.todo, 'title', this.nextName)
        this.todo.description = this.nextDescrip
        this.addNewToDo(this.todo)
      }
      this.nextName = null
      this.nextDescrip = null
    },
    addNewToDo (todo) {
      axios.post(this.url, {
        todo
      }).then(() => this.$router.push({ name: 'ToDoList' }))
    }
  }
}
</script>
