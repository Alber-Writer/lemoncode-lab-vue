<script setup lang="ts">

const manageTask = useManageTasks();
const taskList = manageTask.getTaskList();

const visibleTasks = computed(() => taskList.filter((elem) => !elem.isDeleted));
</script>

<template>
  <div class="flex flex-wrap w-full p-4 gap-6 content-start" role="list">
    <TaskTheTask
      role="listitem"
      v-for="task in visibleTasks"
      :key="task.id"
      :content="task.content"
      :task-id="task.id"
      :is-completed="task.isCompleted"
      :is-deleted="task.isDeleted"
    >
  </TaskTheTask>
  <div v-if="(visibleTasks.length <= 0)" class="flex flex-wrap justify-center">
    <p>There are currently no tasks. You can add a new task at the bottom of this page.</p>
    <TaskArrow class="max-h-[80%]"/>
  </div>
 </div>
</template>
