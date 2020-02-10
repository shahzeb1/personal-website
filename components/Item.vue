<template>
  <div class="proj-item">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ subTitle }}</div>
    <div class="links">
      <nuxt-link :to="`/project/${slug}`">View &#x2192;</nuxt-link>
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
  @apply p-3 bg-purple-300 rounded-lg text-black w-full mx-2;

  .title {
    @apply text-2xl;
  }
  .links {
    @apply text-gray-600;

    a {
      @apply text-gray-700 underline;
    }
  }
}
</style>
