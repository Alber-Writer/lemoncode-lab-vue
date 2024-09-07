<script setup lang="ts">
const props = defineProps<{ enableEditMode: boolean }>();

const emit = defineEmits(['emit-edit-mode'])

const isMenuActive = ref<boolean>(false);

const toggleMenu = (prevState: boolean) => {
  isMenuActive.value = !prevState;
  if (!isMenuActive.value) emit('emit-edit-mode', props.enableEditMode);
};
</script>

<template>
  <div class="flex gap-3">
    <button
      v-if="isMenuActive"
      class="bg-secondary hover:bg-primary menu-button"
      :class="{ [`bg-terciary`]: enableEditMode }"
      aria-roledescription="Button to edit task content"
      title="Edit task content"
      @click="emit('emit-edit-mode', enableEditMode)"
    >
      <img src="@/public/edit_pen.svg" alt="Edit task" />
    </button>
    <button
      v-if="isMenuActive"
      class="bg-rose-700 hover:bg-rose-500 menu-button"
      aria-roledescription="Button to remove this task"
      title="Remove this task"
    >
      <img src="@/public/remove-icon.svg" alt="Remove task" />
    </button>
    <button
      class="bg-dark hover:opacity-100 opacity-50 menu-button"
      aria-roledescription="Toggle task actions menu"
      title="Toggle task actions menu"
      @click="toggleMenu(isMenuActive)"
    >
      <img src="@/public/menu-dots.svg" alt="Task menu" />
    </button>
  </div>
</template>
