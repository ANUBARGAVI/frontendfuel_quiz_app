<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div class="bg-gray-800 p-8 rounded-xl shadow-2xl text-center max-w-md w-full">
        <h2 class="text-4xl sm:text-5xl font-bold text-pink-400 mb-6 animate-pulse">🎉 Quiz Completed!</h2>
        
        <p class="text-xl sm:text-2xl font-semibold mb-4">
          You scored <span class="text-yellow-300">{{ score }}</span> out of <span class="text-green-300">{{ total }}</span>
        </p>
  
        <div class="text-lg mb-6">
          <p v-if="percentage >= 80" class="text-green-400">Excellent work! 🌟</p>
          <p v-else-if="percentage >= 50" class="text-yellow-400">Good job! Keep learning! 💪</p>
          <p v-else class="text-red-400">Don’t worry, try again and you’ll improve! 🚀</p>
        </div>
  
        <div class="space-y-3">
          <router-link
            to="/topics"
            class="block w-full bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition-all"
          >
            🔁 Try Another Quiz
          </router-link>
          <router-link
  :to="{
    name: 'Answers',
    query: {
      answers: route.query.answers,
      quizId: route.query.quizId
    }
  }"
  class="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-all"
>
  📖 View Answers
</router-link>

  
          <router-link
            to="/"
            class="block w-full bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition-all"
          >
            🏠 Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const score = Number(route.query.score)
  const total = Number(route.query.total)
  const percentage = Math.round((score / total) * 100)
  </script>
  