<script setup lang="ts">
const emit = defineEmits(['emit-edit-mode'])
</script>

<template>
  <div class="flex gap-4">
    <button
      class="bg-primary hover:bg-secondary menu-button min-w-fit px-4"
      aria-roledescription="Save changes"
      title="Save changes"
    >
      Save
    </button>
    <button
      class="bg-rose-700 hover:bg-rose-500 menu-button min-w-fit px-4"
      aria-roledescription="Discard Changes"
      title="Discard Changes"
      @click="emit('emit-edit-mode', false)"
    >
      Discard
    </button>
  </div>
</template>