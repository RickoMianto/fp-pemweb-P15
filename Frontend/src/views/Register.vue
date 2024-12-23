<template>
  <div class="min-h-screen bg-gray-950 flex flex-col">
    <!-- Navbar Component -->
    <Navbar />

    <!-- Register Form -->
    <div class="flex justify-center items-center flex-grow">
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-center mb-6 text-lime-500">Register</h2>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label for="username" class="block text-lime-500 text-lg">Username</label>
            <input
              type="text"
              v-model="username"
              id="username"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-lime-500 text-lg">Email</label>
            <input
              type="email"
              v-model="email"
              id="email"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-lime-500 text-lg">Password</label>
            <input
              type="password"
              v-model="password"
              id="password"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            />
          </div>
          <div class="mb-6">
            <label for="role" class="block text-lime-500 text-lg">Role</label>
            <select
              v-model="role"
              id="role"
              class="w-full border border-gray-300 p-2 rounded text-black"
              required
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            class="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default defineComponent({
  components: { Navbar },

  setup() {
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const role = ref('USER')

    const register = async () => {
      if (username.value && email.value && password.value && role.value) {
        try {
          const response = await axios.post('http://localhost:3000/user/register', {
            username: username.value,
            email: email.value,
            password: password.value,
            role: role.value,
          })
          alert('Registration successful!')
          window.location.href = '/login'
        } catch (error) {
          alert('Registration failed. Please try again.')
        }
      } else {
        alert('Please fill in all fields!')
      }
    }

    return { username, email, password, role, register }
  },
})
</script>
