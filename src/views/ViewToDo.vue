<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-card class="box-card">
        <div class="clearfix">
          <h4>{{ todo.title }}</h4>
        </div>
        <el-row :gutter="24">
          <el-col :span="12">
            Estado: {{getState()}}
          </el-col>
          <el-col :span="12">
            {{todo.created_ago}}
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
        <el-col :span="24">
            {{todo.description}}
          </el-col>
          </el-row>
      </el-card>
    </el-col>
  </el-row>
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
