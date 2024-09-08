import { defineStore } from "pinia";
import type { Task } from "~/types";

const generateId = () => Math.random().toString(36).substring(7);

export const useManageTasks = defineStore(
  "manageTasks",
  () => {
    // List of tasks state/store
    const tasksList = ref<Task[]>([]);

    const getTaskList = () => {
      return tasksList.value;
    };

    const createTask = (content: string) => {
      const id = generateId();
      tasksList.value.push({
        id,
        content: content || "New task",
        creationTimestamp: Date.now(),
        isCompleted: false,
        isDeleted: false,
      });
    };

    const getTaskIndex = (id: string) =>
      tasksList.value.findIndex((task) => task.id === id);

    const updateTask = (id: Task["id"], payload: Partial<Task>) => {
      const index = getTaskIndex(id);
      tasksList.value[index] = { ...tasksList.value[index], ...payload };
    };

    const deleteTask = (id: string) =>
      (tasksList.value[getTaskIndex(id)].isDeleted = true);

    return {
      tasksList,
      getTaskList,
      createTask,
      updateTask,
      deleteTask,
    };
  },
  {
    persist: true,
  }
);
