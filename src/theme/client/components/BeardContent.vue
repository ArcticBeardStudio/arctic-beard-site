<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";
import type { ArcticBeardBeardFrontmatter } from "../index.js";

const frontmatter = usePageFrontmatter<ArcticBeardBeardFrontmatter>();
const nick = computed(() => {
  return frontmatter.value.nick ?? "ERR";
});
const name = computed(() => {
  return frontmatter.value.name ?? "ERR";
});
const role = computed(() => {
  return frontmatter.value.role ?? "ERR";
});
</script>

<template>
  <main id="main">
    <div class="content">
      <h1>{{ nick }}</h1>
      <h3>{{ name }}</h3>
      <p>{{ role }}</p>
      <Content />
    </div>
  </main>
</template>
