<script setup lang="ts"></script>

<template>
  <main
    class="flex h-[100dvh] w-[100dvw] bg-slate-800 flex-col overflow-y-auto items-center"
  >
    <header class="bg-red-400 py-4 px-6 w-full max-h-[80px] flex content-center items-center ">
      <div>Logo</div>
    </header>

    <div class="flex flex-col justify-center w-[750px] flex-grow">

      <div class="flex bg-cyan-500 w-full flex-grow overflow-y-auto">
        <slot></slot>
      </div>

      <div class="bg-orange-500 h-[60px] w-full justify-self-end">
        <NewTask />
      </div>
    </div>
    
  </main>
</template>

<style></style>
