<template>
<el-form :model="todo" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Título" prop="title">
    <el-input v-model="todo.title"></el-input>
  </el-form-item>
<el-form-item label="Instant delivery" prop="delivery">
    <el-switch v-model="todo.completed"></el-switch>
  </el-form-item>
<el-form-item label="Activity form" prop="desc">
    <el-input type="textarea" v-model="todo.description"></el-input>
  </el-form-item>
<el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
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
      url: process.env.VUE_APP_TODOS_URL,
      rules: {
        title: [
          { required: true, message: 'Please input your name.', trigger: 'blur' },
          { min: 2, max: 10, message: 'Length of 2 to 10 characters', trigger: 'blur' },
          {
            required: true,
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
            message: 'Name does not support special characters.',
            trigger: 'blur'
          }
        ]
      }
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
