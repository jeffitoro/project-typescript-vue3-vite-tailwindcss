<template>
  <div class="flex-1 p-10 text-2xl font-bold"></div>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import type { ThemeOptionType } from "@/types";
import { showThemeOptionsKey } from "@/symbols";

const options = inject(
  showThemeOptionsKey,
  ref<ThemeOptionType>({ isDark: true })
);

console.log(options.value);

</script>