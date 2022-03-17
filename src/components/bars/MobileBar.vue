<template>
  <div class="flex bg-blue-600 dark:bg-gray-800 text-gray-100 justify-end md:hidden">
    <button
      class="p-4 focus:outline-none focus:bg-gray-700"
      v-on:click="openSideBar"
    >
      <MenuIcon class="h-5 y-5"></MenuIcon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon } from "@heroicons/vue/solid";

const emit = defineEmits(["openSideBar"]);
const openSideBar = () => {
  emit("openSideBar");
};
</script>
