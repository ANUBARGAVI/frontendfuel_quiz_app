<template>
    <div class="max-w-4xl mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold text-pink-500
mb-8">Choose a Topic</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="quiz in quizzes"
          :key="quiz.id"
          class="bg-gray-800 text-white p-6 rounded-lg shadow hover:shadow-lg hover:bg-gray-700 transition"
        >
          <h3 class="text-xl font-semibold">{{ quiz.title }}</h3>
          <router-link :to="`/quiz/${quiz.id}`">
            <button class="mt-4 w-full py-2 bg-pink-500 hover:bg-pink-600 rounded text-white">Take Quiz</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import quizzes from '../data/quizzes.json'
  </script>
  