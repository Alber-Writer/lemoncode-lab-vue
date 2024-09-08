<script setup lang="ts">
const props = defineProps<{ isEditableMode: boolean }>();

const emit = defineEmits(['set-edit-mode', 'setAsDeleted'])

const isMenuActive = ref<boolean>(false);

const toggleMenu = (prevState: boolean) => {
  if (isMenuActive.value && props.isEditableMode) emit('set-edit-mode', false);
  isMenuActive.value = !prevState;
};
</script>

<template>
  <div class="flex gap-3">

    <button
      v-if="isMenuActive"
      class="bg-secondary hover:bg-primary menu-button"
      :class="{ [`bg-terciary`]: isEditableMode }"
      aria-roledescription="Button to edit task content"
      title="Edit task content"
      @click="emit('set-edit-mode', true)"
      >
      <img src="@/public/edit_pen.svg" alt="Edit task" />
    </button>
    
    <button
    v-if="isMenuActive"
    class="bg-rose-700 hover:bg-rose-500 menu-button"
    aria-roledescription="Button to remove this task"
    title="Remove this task"
    @click="emit('setAsDeleted')"
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
