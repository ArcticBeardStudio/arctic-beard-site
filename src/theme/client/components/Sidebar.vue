<script setup lang="ts">
import { usePageData } from "@vuepress/client";
import { computed } from "vue";
import { useSidebarItems } from "../index.js";
import Hamburger from "./Hamburger.vue";

const page = usePageData();
const sidebarItems = useSidebarItems();

const pagePath = computed(() => {
  return page.value.path;
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <div
    id="iron-curtain"
    :class="isOpen ? 'is-active' : ''"
    :onclick="toggleSidebar"
  ></div>
  <div id="sidebar" :class="isOpen ? 'sidebar-open' : ''">
    <Hamburger :toggle="toggleSidebar" :value="isOpen" />
    <a href="/"><img src="/ABS_Text.svg" /></a>
    <div class="nav" role="navigation">
      <ul>
        <li
          v-for="{ path, text } in sidebarItems"
          :class="pagePath.includes(path) ? 'active' : ''"
        >
          <a :href="path">{{ text }}</a>
        </li>
      </ul>
    </div>
    <div class="sidebar-footer">
      <span class="icon-code" title="Coded"></span>
      with
      <span class="icon-heart" title="love"></span>
      by
      <a href="/beards/garm">Garm</a>
    </div>
  </div>
</template>
