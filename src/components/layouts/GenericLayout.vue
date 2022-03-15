<template>
  <div class="md:flex relative min-h-screen">
    <!-- mobilebar start -->
    <MobileBar @openSideBar="updateOpenSideBar"></MobileBar>
    <!-- mobilebar end -->

    <!-- sidebar start -->
    <SideBar :open="openSideBar" @openSideBar="updateOpenSideBar"></SideBar>
    <!-- sidebar end -->

    <!-- contentlayout start -->
    <ContentLayout></ContentLayout>
    <!-- contentlayout end -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SideBar from "../SideBar.vue";
import ContentLayout from "../ContentLayout.vue";
import MobileBar from "../MobileBar.vue";

const openSideBar = ref(false);
const updateOpenSideBar = () => {
  openSideBar.value = !openSideBar.value;
};
</script>