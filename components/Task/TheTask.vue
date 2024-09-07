<script setup lang="ts">
import type { Task } from "@/types";

const props = defineProps<{
  content: Task["content"];
  isCompleted: Task["isCompleted"];
}>();
const taskContent = ref(props.content);
const isChecked = ref(props.isCompleted);
const enableEditMode = ref<boolean>(false);
const editTaskInput = ref(null)

const setEditMode = (prevState: boolean) => {
  enableEditMode.value = !prevState;
  if(enableEditMode.value && editTaskInput.value) editTaskInput.value
};
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
        />

          <!-- Task Content -->
          <p
            class="grow"
            :class="{ [`line-through opacity-60`]: isChecked }"
            v-if="!enableEditMode"
          >
            {{ content }}
          </p>

          <!-- Editmode -->
          <div v-if="enableEditMode" class="flex max-w-[300px] gap-2 flex-wrap content-start items-start justify-start">
            <TaskEditTaskContent :task-content="taskContent" ref="editTaskInput" class="basis-[100%]"></TaskEditTaskContent>
            <TaskEditValidationButtons :edit-mode="enableEditMode" @emit-edit-mode="setEditMode" class="basis-[100%]"/>
          </div>

        <!-- TaskMenu -->
         <TaskMenu :enable-edit-mode="enableEditMode" @set-edit-mode="setEditMode"/>

      </div>
    </form>
  </article>
</template>
