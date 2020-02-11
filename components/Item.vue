<template>
  <div class="proj-item">
    <div class="p-3 gradient rounded-lg text-black">
      <div class="title">{{ title }}</div>
      <div class="desc py-2">{{ subTitle }}</div>
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

  .gradient {
    background-image: linear-gradient(to right, #d6bcfa, #b794f4);
  }

  .title {
    @apply text-2xl;
    text-transform: capitalize;
  }
  .links {
    @apply py-2;
    a {
      @apply bg-purple-600 p-2 rounded text-white;
      &:hover {
        @apply bg-purple-700;
      }
    }
  }
  &:hover {
    transform: scale(1.04);
  }
}
</style>
