<template>
  <main>
    <generic-layout></generic-layout>
  </main>
</template>

<script lang="ts" setup>
import GenericLayout from "../components/layouts/GenericLayout.vue";
import { useMessageStore } from "@/stores";

const messageStore = useMessageStore()
messageStore.indexMessages()
</script>
