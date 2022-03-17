<template>
  <div class="flex-1 p-10 text-2xl font-bold dark:bg-gray-400">
    <IconsColorTheme></IconsColorTheme>
    <div class="dark:bg-gray-400 bg-white block my-10 rounded-lg">
      <div class="max-w-2xl mx-auto">
        <div class="w-full">
          <div class="w-full dark:bg-gray-500 bg-blue-600 h-48 rounded-t-lg"></div>
          <div class="absolute -mt-20 ml-5">
            <div
              class="
                bg-gray-200
                border border-gray-300
                h-30
                w-30
                rounded-lg
                shadow-md
                border-b border-primary
              "
            >
              <img
                class="mx-auto rounded-lg"
                :src="
                  messageStore.message
                    ? messageStore.getMessage?.user.picture.large
                    : ''
                "
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          class="
            bg-primary
            border border-primary
            dark:border-gray-500
            dark:bg-gray-800
            rounded-b-lg
            p-5
            pt-20
            flex flex-col
          "
        >
          <div class="mb-1 dark:text-white dark:bg-gray-500 dark:border-gray-500 bg-gray-200 border border-gray-300 h-5 w-40 text-sm font-light pl-5">
            {{ messageStore.getMessage?.user.name.title }}
            {{ messageStore.getMessage?.user.name.first }}
            {{ messageStore.getMessage?.user.name.last }}
          </div>
          <div class="mb-1 dark:text-white dark:bg-gray-500 dark:border-gray-500 bg-gray-200 border border-gray-300 h-5 max-w-96 text-sm font-light pl-5">
            {{ messageStore.getMessage?.user.email }}
          </div>
          <div class="mb-1 dark:text-white dark:bg-gray-500 dark:border-gray-500 bg-gray-200 border border-gray-300 h-5 max-w-96 text-sm font-light pl-5">
            {{ messageStore.getMessage?.summary }}
          </div>
          <div class="break-all bbcode">
            <div
              class="mb-1 dark:bg-gray-500 dark:border-gray-500 bg-gray-200 border border-gray-300 h-5 w-full h-auto"
            >
              <p class="text-sm dark:text-white font-light px-5 py-3">
                {{ messageStore.getMessage?.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useMessageStore } from "@/stores";
import IconsColorTheme from "../icons/IconsColorTheme.vue";

const route = useRoute();
const messageStore = useMessageStore();

onBeforeMount(async () => {
  await messageStore.showMessage(route.params.id);
});

watch(
  () => route.params.id,
  async (newId) => {
    await messageStore.showMessage(newId);
  }
);
</script>