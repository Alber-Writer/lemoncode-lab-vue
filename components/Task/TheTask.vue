<script setup lang="ts">
import type { Task } from "@/types";

const props = defineProps<{
  content: Task["content"];
  isCompleted: Task["isCompleted"];
}>();
const taskContent = ref(props.content);
const isChecked = ref(props.isCompleted);
const isEditableMode = ref<boolean>(false);

const setEditMode = (state?: boolean) =>
  (isEditableMode.value = state ?? !isEditableMode.value);
</script>

<template>
  <article class="w-full px-3 py-2">
    <form @submit.prevent>
      <div
        class="flex text-dark justify-between p-2 pb-3 text-sm font-sans border-b-2 rounded-md gap-4 items-top content-center"
      >
        <!-- Task Checkbox -->
        <input
          class="size-5"
          type="checkbox"
          name="isActive"
          id=""
          v-model="isChecked"
          aria-label="Toggle checking a task as completed"
        />

        <!-- Task Content -->
        <p
          class="grow"
          :class="{ [`line-through opacity-60`]: isChecked }"
          v-if="!isEditableMode"
        >
          {{ content }}
        </p>

        <!-- Editmode -->
        <div
          v-if="isEditableMode"
          class="flex max-w-[300px] gap-2 flex-wrap content-start items-start justify-start"
        >
          <TaskEditTaskContent
            :task-content="taskContent"
            class="basis-[100%]"
          ></TaskEditTaskContent>
          <TaskEditValidationButtons
            :is-editable-mode="isEditableMode"
            @emit-edit-mode="setEditMode"
            class="basis-[100%]"
          />
        </div>

        <!-- TaskMenu -->
        <TaskMenu
          :is-editable-mode="isEditableMode"
          @emit-edit-mode="setEditMode"
        />
      </div>
    </form>
  </article>
</template>
