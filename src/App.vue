<template>
  <div>
    <h1>Submit User Information</h1>
    <div>
      <input v-model="user.name" placeholder="Enter your name" />
      <input v-model="user.age" type="number" placeholder="Enter your age" />
      <button @click="submitUserInfo">Submit</button>
    </div>
    <div v-if="response">
      <p>Response from server: {{ response }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        name: '',
        age: ''
      },
      response: null
    };
  },
  methods: {
    submitUserInfo() {
      console.log('Sending POST request to:', '/api/user');
      axios.post('/api/user', this.user)  // 发送 POST 请求到 /api/user
        .then(response => {
          this.response = response.data;  // 显示从后端收到的响应
        })
        .catch(error => {
          console.error("There was an error submitting the user info:", error);
        });
    }
  }
};
</script>

<style scoped>
/* 自定义样式 */
</style>
