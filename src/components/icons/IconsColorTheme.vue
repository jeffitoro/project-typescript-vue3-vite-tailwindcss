<template>
  <div class="flex justify-end">
    <button
      aria-hidden="true"
      @click="updateOptions?.call"
      class="
        group
        p-2
        transition-colors
        duration-200
        rounded-full
        shadow-md
        bg-blue-200
        hover:bg-blue-200
        dark:bg-gray-50 dark:hover:bg-gray-200
        text-gray-900
        focus:outline-none
      "
    >
      <component
        v-for="icon in icons"
        :key="icon"
        :is="icon.svg"
        class="
          fill-current
          text-gray-700
          group-hover:text-gray-500
          group-focus:text-gray-700
          dark:text-gray-700
          dark:group-hover:text-gray-500
          dark:group-focus:text-gray-700
          w-7
          h-7
        "
        :class="`${
          !options?.isDark && icon.name === 'moon'
            ? ' hidden'
            : options?.isDark && icon.name == 'star'
            ? ' hidden'
            : ''
        }`"
      ></component>
    </button>
  </div>
</template>

<script setup lang="ts">
import { StarIcon, MoonIcon } from "@heroicons/vue/outline";
import { showThemeOptionsKey, updateThemeOptionsKey } from "@/symbols";
import { inject } from "vue";

const options = inject(showThemeOptionsKey);
const updateOptions = inject(updateThemeOptionsKey)

const icons = [
  {
    svg: StarIcon,
    name: "star",
    isDark: options?.value.isDark,
  },
  {
    svg: MoonIcon,
    name: "moon",
    isDark: !options?.value.isDark,
  },
];
</script>

<style scoped>
</style>