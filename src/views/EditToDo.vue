<template>
<el-card class="box-card">
<el-form :model="todo" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Título" prop="todo.title">
    <el-input v-model="todo.title"></el-input>
  </el-form-item>
  <el-form-item label="Estado" prop="todo.completed">
    <el-switch v-model="todo.completed"></el-switch>
  </el-form-item>
  <el-form-item label="Descripción" prop="todo.description">
    <el-input type="textarea" v-model="todo.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
</el-card>
</template>
<script>
import axios from 'axios'

export default {
  name: 'viewtodo',
  props: ['id'],
  data () {
    return {
      todo: {
        title: String,
        description: String,
        completed: Boolean,
        create_ago: String
      },
      url: process.env.VUE_APP_TODOS_URL
    }
  },
  mounted () {
    this.getToDo()
  },
  methods: {
    getToDo () {
      axios
        .get(this.url + this.id)
        .then((response) => (this.todo = response.data))
    },
    getState () {
      if (this.todo.completed === false) return 'Activa'
      else {
        return 'Completa'
      }
    }
  }
}
</script>
