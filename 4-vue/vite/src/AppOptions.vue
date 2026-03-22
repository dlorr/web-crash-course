<script>
export default {
  data() {
    return {
      message: "Hello World! Data",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task 3"],
      link: "https://google.com"
    };
  },
  methods: {
    toggleStatus() {
      if(this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <p v-if="status === 'active'">I am active</p>
  <p v-else-if="status === 'pending'">I am pending</p>
  <p v-else>I am inactive</p>
  <h1>Tasks</h1>
  <ul>
    <li v-for="task in tasks" :key="task"">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>
  <br/>
  <button @click="toggleStatus">Change status</button>
</template>
