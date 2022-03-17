/**
 * Router urls make.
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ContentLayout from "@/components/layouts/ContentLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)', redirect: '/'
    },
    {
      path: '/',
      name: 'welcome',
      component: HomeView,
      meta: {
        title: "Welcome",
      },
      children: [
        {
          path: "",
          component: ContentLayout,
          meta: {
            title: "Message detail default"
          },
        },
        {
          path: "/messages/:id",
          component: ContentLayout,
          meta: {
            title: "Message detail id"
          },
        }
      ]
    },
  ]
})

export default router
