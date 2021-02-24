<template>
  <div class="top">
    <span
      v-for="(t, index) in text"
      :key="index"
      class="item"
      :style="{ animationDelay: index * 100 + 'ms' }"
      >{{ t }}</span
    >
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: `Kodaira Koki`,
    };
  },
};
</script>

<style scoped lang="scss">
.top {
  text-align: center;
  padding-top: 8em;
}

@keyframes text-in {
  0% {
    transform: translate(0);
    opacity: 0;
  }
}
.item {
  font-size: 4em;
  // color: #141c3a;
  color: #fff;
  display: inline-block;
  min-width: 0.3em;
  animation: text-in 0.8s backwards;
}
</style>
