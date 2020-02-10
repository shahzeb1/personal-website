<template>
  <div class="proj-item">
    <div class="p-3 bg-purple-300 rounded-lg text-black">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ subTitle }}</div>
      <div class="links">
        <nuxt-link :to="`/project/${slug}`">View &#x2192;</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    slug: String,
    homeLinks: Array
  }
};
</script>

<style lang="scss">
.proj-item {
  @apply w-1/2 p-2;
  transition: all 0.3s ease-in-out;

  .title {
    @apply text-2xl;
  }
  .links {
    @apply py-2;
    a {
      @apply bg-purple-500 p-2 rounded;
      &:hover {
        @apply bg-purple-600;
      }
    }
  }
  &:hover {
    transform: scale(1.04);
  }
}
</style>
