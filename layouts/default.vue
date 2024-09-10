<script setup lang="ts"></script>

<template>
  <main
    class="grid h-[100dvh] w-[100dvw] grid-rows-[80px_1fr_auto] gap-4 justify-items-center"
  >
    <header
      class="bg-primary py-4 px-6 w-full max-h-[80px] flex items-center gap-4 border-b-2 border-secondary"
    >
      <img src="@/public/logo.svg" alt="Task App logo" />
      <img src="@/public/logo-name.svg" alt="Vue Lab Tasks Manager App" />
    </header>

    <slot></slot>

    <NewTask
      class="flex bg-terciary h-fit max-w-[750px] rounded-md p-2 pt-6 pb-8 border-b-2 mb-8"
    ></NewTask>
  </main>
</template>

<style></style>
