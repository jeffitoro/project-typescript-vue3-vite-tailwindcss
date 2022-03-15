<script setup lang="ts">
import { RouterView } from "vue-router";
import ProviderTheme from "@/providers/ProviderTheme.vue";
</script>

<template>
  <ProviderTheme>
    <RouterView />
  </ProviderTheme>
</template>