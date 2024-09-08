<script setup lang="ts">
const emit = defineEmits(['set-edit-mode', 'update-task'])
</script>

<template>
  <div class="flex gap-4">
    <button
      class="bg-primary hover:bg-secondary menu-button min-w-fit px-4"
      aria-roledescription="Save changes"
      title="Save changes"
      @click="emit('update-task', true), emit('set-edit-mode', false)"
    >
      Save
    </button>
    <button
      class="bg-rose-700 hover:bg-rose-500 menu-button min-w-fit px-4"
      aria-roledescription="Discard Changes"
      title="Discard Changes"
      @click="emit('set-edit-mode', false)"
    >
      Discard
    </button>
  </div>
</template>