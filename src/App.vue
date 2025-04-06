<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <!-- Navbar -->
    <nav class="bg-black text-white shadow-md">
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <!-- Logo -->
        <router-link
          to="/"
          class="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-yellow-300 tracking-wide font-orbitron"
        >
          FrontendFuel
          <span class="text-3xl animate-pulse">🔥</span>
        </router-link>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="sm:hidden border border-white px-2 py-1 rounded">
          MENU
        </button>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex gap-6 text-sm font-semibold">
          <router-link to="/" class="hover:text-yellow-300 transition" @click="isOpen = false">Home</router-link>
          <router-link to="/about" class="hover:text-yellow-300 transition" @click="isOpen = false">About</router-link>
          <router-link to="/topics" class="hover:text-yellow-300 transition" @click="isOpen = false">Topics</router-link>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isOpen" class="sm:hidden bg-black text-white text-center">
        <router-link @click="isOpen = false" to="/" class="block py-2 border-t border-white hover:bg-gray-800">Home</router-link>
        <router-link @click="isOpen = false" to="/about" class="block py-2 border-t border-white hover:bg-gray-800">About</router-link>
        <router-link @click="isOpen = false" to="/topics" class="block py-2 border-t border-white hover:bg-gray-800">Topics</router-link>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="flex-grow pt-20">
      <router-view />
    </main>

    <!-- Sticky Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'

const isOpen = ref(false)
</script>
