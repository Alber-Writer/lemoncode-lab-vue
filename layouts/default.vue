<script setup lang="ts">
</script>

<template>
  <main
    class="flex h-[100dvh] w-[100dvw] flex-col overflow-y-auto items-center"
  >
    <header class="bg-primary py-4 px-6 w-full max-h-[80px] flex content-center items-center gap-4">
        <img src="@/public/logo.svg" alt="Task App logo" />
        <img src="@/public/logo-name.svg" alt="Vue Lab Tasks Manager App" />
    </header>

    <div class="flex flex-col justify-center max-w-[750px] basis-[750px] flex-grow">

      <div class="flex 0 w-full flex-grow overflow-y-auto">
        <slot></slot>
      </div>

      <div class="bg-terciary h-[60px] w-full justify-self-end">
        <NewTask />
      </div>
    </div>
  </main>
</template>

<style></style>
