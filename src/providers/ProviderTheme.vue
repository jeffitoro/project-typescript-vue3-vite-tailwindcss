<template>
  <!-- component renderless start -->
  <slot />
  <!-- component renderless end -->
</template>

<script lang="ts" setup>
import { provide, ref, onBeforeMount } from "vue";
import type { ThemeOptionType, UpdateThemeOptions } from "@/types";
import { showThemeOptionsKey, updateThemeOptionsKey } from "@/symbols";

// check darkmode enable
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

// update properties in body generic
const updateDarkModeGeneric = (): void => {
  if (options.value.isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// update state before mount provider theme
onBeforeMount(() => {
  window.localStorage.setItem("isDark", JSON.stringify(options.value.isDark));
  updateDarkModeGeneric();
});

// define update options
const update: UpdateThemeOptions = () => {
  options.value.isDark = !options.value.isDark;
  window.localStorage.setItem("isDark", JSON.stringify(options.value.isDark));
  updateDarkModeGeneric();
};

// declaration
provide(showThemeOptionsKey, options);
provide(updateThemeOptionsKey, update);
</script>
