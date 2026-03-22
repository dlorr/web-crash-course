<script setup>
import { ref } from 'vue';

const message = ref("Hello World! Data")
const status = ref("pending")
const tasks = ref(["Task 1", "Task 2", "Task 3"])
const link = ref("https://google.com")
const newTask = ref("")

const toggleStatus = () => {
  if(status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

const addTask = (e) => {
  if (newTask.value.trim()!=="") {
    tasks.value.push(newTask.value)
    newTask.value = ""
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <h1>{{ message }}</h1>
  <p v-if="status === 'active'">I am active</p>
  <p v-else-if="status === 'pending'">I am pending</p>
  <p v-else>I am inactive</p>

  <form @submit="addTask">
    <label for="newTask">Add Task</label>
    <br/>
    <input type="text" id="newTask" name="newTask" v-model="newTask"/>
    <br/>
    <button type="submit">Submit</button>
  </form>

  <h1>Tasks</h1>
  <ul>
    <li v-for="(task, index) in tasks" :key="task"">
      <span>{{ task }}</span>
  <button @click="deleteTask(index)">Delete task</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>
  <br/>
  <button @click="toggleStatus">Change status</button>

</template>
