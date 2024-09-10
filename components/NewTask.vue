<script setup lang="ts">
const manageTask = useManageTasks();

const taskContent = ref<string>("");

const contentInput = ref<HTMLInputElement | null>(null);

const createTask = (content: string) => {
  manageTask.createTask(content);
  taskContent.value = "";
  contentInput.value?.blur();
};
</script>

<template>
  <form
    @submit.prevent="createTask(taskContent)"
    aria-label="Create a new task filling this form"
    class="w-full"
  >
    <div class="flex px-16 justify-between gap-6 basis-[100%]">
      <div class="relative z-0 grow">
        <input
          name="create-task"
          id="create-task"
          type="text"
          v-model="taskContent"
          ref="contentInput"
          placeholder=""
          class="new-task__input peer"
          maxlength="50"
          aria-content="Fill with task content"
        />
        <label for="create-task" class="new-task__label">New task</label>
      </div>

      <button aria-label="Submit new task" title="Add task">
        <img src="@/public/create-task.svg" alt="Create task" />
      </button>
    </div>
  </form>
</template>

<style lang="css" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.new-task__label {
  @apply absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto;
}

.new-task__input {
  @apply block py-2.5 px-0 w-full text-textColor bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-blue-500;
}
</style>
