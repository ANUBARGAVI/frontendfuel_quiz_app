<template>
    <div class="max-w-4xl mx-auto py-12 px-4 sm:px-8 md:px-12 bg-white shadow-xl rounded-xl border border-gray-200 text-black">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 mb-8 text-center">
        📚 About This Quiz App
      </h1>
  
      <p class="mb-6 text-lg leading-relaxed">
        Welcome to the <strong class="text-pink-600">Quiz App</strong> – your one-stop platform to test and improve your knowledge in various topics like <span class="font-medium">HTML</span>, <span class="font-medium">CSS</span>, <span class="font-medium">JavaScript</span>, and more.
      </p>
  
      <ul class="list-disc list-inside mb-6 space-y-3 text-base sm:text-lg">
        <li>🧠 Choose a quiz topic from the <strong>Topics</strong> page.</li>
        <li>📝 Answer the questions in the quiz.</li>
        <li>✅ Submit your answers to see your score and check the correct answers.</li>
        <li>📊 Review your performance and learn from your mistakes on the <strong>Answers</strong> page.</li>
      </ul>
  
      <p class="mb-8 text-lg">
        This app is built using <strong class="text-blue-500">Vue 3</strong> and styled with <strong class="text-blue-500">Tailwind CSS</strong>. It’s designed for both beginners and experienced developers who want to practice web development skills in an interactive way.
      </p>
  
      <div class="text-center">
        <router-link
          to="/"
          class="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition-all duration-200"
        >
          🔙 Back to Home
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  