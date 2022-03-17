<template>
  <div class="md:flex relative min-h-screen">
    <!-- mobilebar start -->
    <MobileBar @openSideBar="updateOpenSideBar"></MobileBar>
    <!-- mobilebar end -->

    <!-- sidebar start -->
    <SideBar
      :open="openSideBar"
      @openSideBar="updateOpenSideBar"
      :messages="messageStore.getMessages"
    ></SideBar>
    <!-- sidebar end -->

    <!-- contentlayout start -->
    <router-view></router-view>
    <!-- contentlayout end -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SideBar from "@/components/bars/SideBar.vue";
import MobileBar from "@/components/bars/MobileBar.vue";
import { useMessageStore } from "@/stores";

const messageStore = useMessageStore();

const openSideBar = ref(false);
const updateOpenSideBar = () => {
  openSideBar.value = !openSideBar.value;
};
</script>