<template>
    <div class="max-w-3xl mx-auto py-10 px-4 text-white">
      <h2 class="text-3xl font-bold text-pink-400 mb-6">{{ quiz.title }}</h2>
  
      <div
        v-for="(q, i) in quiz.questions"
        :key="i"
        class="mb-8 bg-gray-800 p-6 rounded-lg"
      >
        <p class="mb-4 font-medium text-lg">Q{{ i + 1 }}. {{ q.question }}</p>
        <div class="space-y-2">
          <div
            v-for="(opt, idx) in q.options"
            :key="idx"
            class="flex items-center"
          >
            <input
              type="radio"
              :name="'question-' + i"
              :value="opt"
              :checked="userAnswers[i] === opt"
              @click="toggleAnswer(i, opt)"
              class="mr-2"
            />
            <label>{{ opt }}</label>
          </div>
        </div>
      </div>
  
      <button
        @click="submitQuiz"
        class="px-6 py-3 bg-yellow-400 text-black rounded hover:bg-yellow-300"
      >
        Submit
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import quizzes from '../data/quizzes.json'
  
  const route = useRoute()
  const router = useRouter()
  const quiz = quizzes.find(q => q.id === route.params.id)
  
  const userAnswers = ref([]) 
  const score = ref(null)
  
  
  const toggleAnswer = (index, option) => {
    if (userAnswers.value[index] === option) {
      userAnswers.value[index] = null 
    } else {
      userAnswers.value[index] = option 
    }
  }
  
  const submitQuiz = () => {
    let result = 0
    quiz.questions.forEach((q, index) => {
      if (userAnswers.value[index] === q.answer) {
        result++
      }
    })
    score.value = result
  
    router.push({
      name: 'Result',
      query: {
        score: result,
        total: quiz.questions.length,
        quizId: quiz.id,
        answers: JSON.stringify(userAnswers.value)
      }
    })
  }
  </script>
  