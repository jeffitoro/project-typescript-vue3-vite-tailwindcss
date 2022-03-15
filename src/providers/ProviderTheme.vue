<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import type { ThemeOptionType, UpdateThemeOptions } from "@/types";
import { showThemeOptionsKey, updateThemeOptionsKey } from "@/symbols";

const getTheme = (): boolean => {
  if (window.localStorage.getItem("isDark")) {
    return !!JSON.parse(window.localStorage.getItem("isDark") || "");
  }
  return (
    !!window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

//  properties theme
const options = ref<ThemeOptionType>({
  isDark: getTheme(),
});

// define update options
const update: UpdateThemeOptions = () => {
  options.value.isDark = getTheme();
  window.localStorage.setItem("isDark", JSON.stringify(options.value.isDark));
};

// declaration
provide(showThemeOptionsKey, options);
provide(updateThemeOptionsKey, update);
</script>
