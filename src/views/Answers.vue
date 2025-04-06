<template>
    <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-green-400 mb-10 text-center">
        📘 Answer Review
      </h2>
  
      <div v-if="quiz && userAnswers.length">
        <div
          v-for="(q, i) in quiz.questions"
          :key="i"
          class="mb-8 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
        >
          <p class="mb-3 font-semibold text-lg sm:text-xl">
            Q{{ i + 1 }}. {{ q.question }}
          </p>
  
          <p class="mb-2">
            <span class="font-semibold">Your Answer:</span>
            <span :class="userAnswers[i] === q.answer ? 'text-green-400' : 'text-red-400'">
              {{ userAnswers[i] || 'Not Answered' }}
            </span>
          </p>
  
          <p class="text-sm text-yellow-300">
            ✅ Correct Answer: {{ q.answer }}
          </p>
        </div>
  
        <div class="flex justify-center mt-10">
          <router-link
            to="/topics"
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow"
          >
            🔁 Try Another Quiz
          </router-link>
        </div>
      </div>
  
      <div v-else class="text-center text-red-400 font-semibold mt-16">
        ⚠️ Answers not available. Please complete a quiz first.
        <br />
        <router-link
          :to="quizId ? `/quiz/${quizId}` : '/topics'"
          class="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow"
        >
          📝 Go to Quiz
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import quizzes from '../data/quizzes.json'
  
  const route = useRoute()
  
  let userAnswers = []
  let quiz = null
  let quizId = route.query.quizId
  
  try {
    userAnswers = JSON.parse(route.query.answers || '[]')
    quiz = quizzes.find(q => q.id === quizId)
  } catch (err) {
    console.error('Failed to load answers or quiz:', err)
  }
  </script>
  