<script setup lang="ts">
import { usePostItems } from "../index.js";

const postItems = usePostItems();
</script>

<template>
  <div id="main">
    <div class="content">
      <div class="posts">
        <a
          v-for="{
            path,
            titleText,
            dateText,
            authorText,
            descriptionText,
          } in postItems"
          :href="path"
        >
          <section class="post">
            <header class="post-header">
              <h2 class="post-title">{{ titleText }}</h2>
              <span class="post-date">{{ dateText }}</span>
              <p class="post-author">by {{ authorText }}</p>
            </header>
            <div class="post-description">
              <p>{{ descriptionText }}</p>
            </div>
          </section>
        </a>
      </div>
    </div>
  </div>
</template>
