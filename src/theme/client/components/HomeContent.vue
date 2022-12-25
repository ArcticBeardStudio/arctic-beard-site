<script setup lang="ts">
import { useSiteLocaleData, withBase } from "@vuepress/client";
import { computed } from "vue";

const siteLocale = useSiteLocaleData();
const title = computed(() => {
  return siteLocale.value.title;
});
const subtitle = computed(() => {
  return siteLocale.value.description;
});
const img = computed(() => {
  return `url(${withBase("/index/header-img.jpg")})`;
});

function scrollDown() {
  window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" });
}
</script>

<template>
  <main id="home">
    <div class="home-header">
      <div class="img" :style="{ backgroundImage: img }"></div>
      <div class="text">
        <div class="text-cell">
          <h1 class="greeting">Welcome to</h1>
          <h1 class="title">
            {{ title }}
          </h1>
          <p class="subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <div class="arrow bounce">
        <a :onclick="scrollDown">
          <span class="icon-arrow-down"></span>
        </a>
      </div>
    </div>
    <div class="content">
      <Content />
    </div>
  </main>
</template>
