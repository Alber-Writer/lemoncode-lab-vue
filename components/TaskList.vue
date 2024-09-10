<script setup lang="ts">
const manageTask = useManageTasks();
const taskList = manageTask.getTaskList();

const visibleTasks = computed(() => taskList.filter((elem) => !elem.isDeleted));
const taskListRef = ref<Element | null>(null);
const lastknownElementID = ref<string>("");

const newTaskVisualEffect = ({
  element = null,
  cssClassName,
  timing = 3000,
}: {
  element: Element | null;
  cssClassName: string;
  timing?: number;
}) => {
  if (!element || !cssClassName) return;
  element.classList.add(cssClassName);
  setTimeout(() => {
    element.classList.remove(cssClassName);
  }, timing);
};

onUpdated(() => {
  if (!taskListRef.value) return;
  const lastItemId = taskListRef.value.lastElementChild?.getAttribute("id");
  
  // Navigate to last task/element if ID is different from lastKnown
  if (lastknownElementID.value !== lastItemId) {
    taskListRef.value.scrollTop = taskListRef.value.scrollHeight;
    lastknownElementID.value = lastItemId || "";
    newTaskVisualEffect({
      element: taskListRef.value?.lastElementChild,
      cssClassName: "newItem",
    });
  }
});
</script>

<template>
  <div
    class="max-w-[750px] w-full p-4 gap-6 overflow-y-auto"
    ref="taskListRef"
    role="list"
  >
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
    <div v-if="visibleTasks.length <= 0" class="flex flex-wrap justify-center">
      <p class="w-full">
        There are currently no tasks. You can add a new task at the bottom of
        this page.
      </p>
      <TaskArrow class="max-h-[70vh] mask" />
    </div>
  </div>
</template>

<style lang="css">
.mask {
  -webkit-mask-image: linear-gradient(transparent, black);
  mask-image: linear-gradient(transparent, black);
}
.newItem {
  @apply bg-terciary;
  animation-name: aparece;
  animation-timing-function: ease;
  animation-duration: 2000ms;
  animation-fill-mode: forwards;
}
@keyframes aparece {
  0% {
    @apply bg-transparent;
  }
  33% {
    @apply bg-terciary;
  }
  66% {
    @apply bg-terciary;
  }
  100% {
    @apply bg-transparent;
  }
}
</style>
