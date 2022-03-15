<template>
  <transition
    enter-class="opacity-0"
    enter-active-class="ease-out transition-medium"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="ease-out transition-medium"
    leave-to-class="opacity-0"
  >
    <div @keydown.esc="openSideBar" v-show="open" class="z-10 fixed inset-0 transition-opacity">
      <div @click="openSideBar" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
    </div>
  </transition>
  <div
    class="
      z-20
      bg-blue-800
      text-blue-100
      w-2/3
      md:w-1/3
      space-y-6
      px-2
      py-7
      absolute
      inset-y-0
      left-0
      transform
      transition
      duration-200
      ease-in-out
      md:relative md:translate-x-0
    "
    :class="props.open ? '' : '-translate-x-full'"
  ></div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  open: Boolean,
});
const emit = defineEmits(["openSideBar"]);
const openSideBar = () => {
  emit("openSideBar");
};
</script>

<style scoped>
</style>