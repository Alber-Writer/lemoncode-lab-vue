<script setup lang="ts">
</script>

<template>
  <div class="flex flex-wrap w-full p-4 gap-6 content-start">
    <TheTask :content="`Hola`" :is-completed="true"></TheTask>
    <TheTask :content="`Segunda`" :is-completed="false"></TheTask>
    <TheTask :content="`Tercera`" :is-completed="false"></TheTask>
  </div>
</template>