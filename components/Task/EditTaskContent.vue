<script setup lang="ts">
import type { Task } from "@/types";
const props = defineProps<{
  taskContent: Task["content"];
}>();
const data = props.taskContent
const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus(),
};
</script>

<template>
  <input
    v-focus
    type="text"
    class="grow outline-none border-b-secondary border-b-2"
    v-model="data"
    maxlength="50"
  />
</template>