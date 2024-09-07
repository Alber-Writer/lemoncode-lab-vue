<script setup lang="ts">
// Todo: Pass delete action
</script>

<template>
  <div class="flex flex-wrap w-full p-4 gap-6 content-start">
    <TaskTheTask :content="`Hola`" :is-completed="true"></TaskTheTask>
    <TaskTheTask :content="`Segunda`" :is-completed="false"></TaskTheTask>
    <TaskTheTask :content="`Tercera`" :is-completed="false"></TaskTheTask>
  </div>
</template>