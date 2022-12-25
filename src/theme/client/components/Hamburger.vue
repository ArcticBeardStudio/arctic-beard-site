<script lang="ts">
export default {
  data() {
    return {
      active: false,
    };
  },
  props: ["toggle", "value"],
};
</script>

<template>
  <button
    id="sidebar-btn"
    class="hamburger hamburger--elastic"
    :class="value ? 'is-active' : ''"
    type="button"
    @click="toggle"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<style lang="scss">
@import "../style/style";
$hamburger-types: (elastic);
$hamburger-layer-color: $base05;
@import "node_modules/hamburgers/_sass/hamburgers/hamburgers";

#sidebar-btn {
  position: absolute;
  z-index: 3;
  top: 0;
  right: -70px;

  @include media(">=desktop") {
    display: none;
  }

  @include media("<tablet") {
    &.is-active {
      right: 0;
    }

    transition: right 0.5s cubic-bezier(0.87, -0.41, 0.19, 1.44);
  }
}
</style>
