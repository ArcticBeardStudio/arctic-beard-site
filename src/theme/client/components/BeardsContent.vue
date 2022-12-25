<script setup lang="ts">
import { useBeardItems } from "../index.js";

const beardItems = useBeardItems();
</script>

<template>
  <main id="main">
    <div class="content">
      <div class="beards">
        <a
          v-for="{ path, frontmatter: { nick, name, role } } in beardItems"
          :href="path"
        >
          <section class="beard">
            <p class="beard-name">{{ name }}</p>
            <h2 class="beard-nick">{{ nick }}</h2>
            <p class="beard-role">{{ role }}</p>
          </section>
        </a>
      </div>
    </div>
  </main>
</template>
