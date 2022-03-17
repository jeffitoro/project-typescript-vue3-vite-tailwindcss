<template>
  <router-link
    class="
      flex
      max-w-md
      bg-white
      shadow-lg
      rounded-lg
      overflow-hidden
      md:max-w-full
      dark:bg-gray-800
    "
    :to="`/messages/${message?.id}`"
  >
    <div class="w-2 dark:bg-gray-400 bg-blue-400"></div>
    <div class="flex items-center px-2 py-3">
      <img
        class="w-12 h-12 object-cover rounded-full"
        :src="message?.user.picture"
      />
      <div class="mx-3">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          {{ message?.user.firstName }} {{ message?.user.lastName }}
        </h2>
        <p class="text-gray-600 dark:text-slate-200">
          {{ message?.summary }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Message } from "@/types";
import type { PropType } from "vue";

defineProps({
  message: Object as PropType<Message>,
});
</script>

<style scoped>
</style>