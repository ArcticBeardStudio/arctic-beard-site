<script setup lang="ts">
import { usePageData, usePageFrontmatter, withBase } from "@vuepress/client";
import { computed } from "vue";
import type { ArcticBeardPostFrontmatter } from "../index.js";

const page = usePageData();
const frontmatter = usePageFrontmatter<ArcticBeardPostFrontmatter>();
const title = computed(() => {
  return page.value.title;
});
const img = computed(() => {
  if (!frontmatter.value.img) {
    return "";
  }

  let name = frontmatter.value.img;
  let path = `${page.value.path.replace(".html", "")}/${name}`;
  return `url(${withBase(path)})`;
});
</script>

<template>
  <div id="main">
    <div class="head">
      <div class="img" :style="{ backgroundImage: img }"></div>

      <div class="text">
        <div class="text-cell">
          <h1 class="title">{{ title }}</h1>
          <!-- {% if meta.author %}
          <div class="author">
            by <a href="/beards/{{ meta.author }}">{{ meta.author }}</a>
          </div>
          {% elseif meta.authors %}
          <div class="author">
            by {% for author in meta.authors %} {% if not loop.first and not
            loop.last %}, {% elseif loop.last %} and {% endif %}<a
              href="/beards/{{ author|lower }}"
              >{{ author }}</a
            >
            {% endfor %}
          </div>
          {% endif %}
          <div class="date">{{ meta.date }}</div> -->
        </div>
      </div>
    </div>
    <div class="content has-img">
      <Content />
    </div>
  </div>
</template>
