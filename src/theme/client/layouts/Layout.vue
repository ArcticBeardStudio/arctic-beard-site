<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import HomeContent from "../components/HomeContent.vue";
import BeardsContent from "../components/BeardsContent.vue";
import BeardContent from "../components/BeardContent.vue";
import PostsContent from "../components/PostsContent.vue";
import PostContent from "../components/PostContent.vue";
import { usePageFrontmatter } from "@vuepress/client";
import type { ArcticBeardPageFrontmatter } from "../index.js";
import { computed } from "vue";

const frontmatter = usePageFrontmatter<ArcticBeardPageFrontmatter>();
const pageType = computed(() => {
  return frontmatter.value.pageType ?? "post";
});
</script>

<template>
  <Sidebar />
  <HomeContent v-if="pageType == 'home'" />
  <BeardsContent v-if="pageType == 'beards'" />
  <BeardContent v-if="pageType == 'beard'" />
  <PostsContent v-if="pageType == 'posts'" />
  <PostContent v-if="pageType == 'post'" />
  <Footer />
</template>

<style lang="scss">
@import "../style/style";
</style>
