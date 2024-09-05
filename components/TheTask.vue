
<script setup lang="ts">
import type {Task}  from '@/types';

const props = defineProps<{
  content:Task["content"],
  isCompleted:Task["isCompleted"],
}>();
const isChecked = ref(props.isCompleted);
</script>

<template>
  <article class="w-full px-3 py-2">
    <form @submit.prevent>
      <!-- <form @submit.prevent="onSubmitMethoood"> -->

      <div
        class="flex text-dark justify-between p-2 pb-3 text-sm font-sans border-b-2 rounded-md gap-4 items-center"
      >
        <input class="size-5" type="checkbox" name="isActive" id="" v-model="isChecked" />

        <p class="grow flex">
          {{ content }}
        </p>

        <input type="text" placeholder="content">

        <div class="flex gap-3">
          <button
            class="bg-secondary hover:bg-primary menu-button"
            aria-roledescription="Button to edit task content"
            title="Edit task content"
          >
            <img src="@/public/edit_pen.svg" alt="Edit task" />
          </button>
          <button
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
          >
            <img src="@/public/menu-dots.svg" alt="Task menu" />
          </button>
        </div>
      </div>
    </form>
  </article>
</template>
