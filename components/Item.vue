<template>
  <div class="proj-item md:w-1/2">
    <nuxt-link :to="`/project/${slug}`">
      <div class="gradient">
        <div class="title">{{ title }}</div>
        <div class="desc py-2">{{ subTitle }}</div>
        <div class="flex content-between flex-row">
          <div class="flex-1 tag">{{ tagLine }}</div>
          <div class="flex-1 text-right arrow">&#x2192;</div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    slug: String,
    tagLine: String,
    homeLinks: Array
  }
};
</script>

<style lang="scss">
.proj-item {
  @apply p-2;
  transition: all 0.3s ease-in-out;

  .gradient {
    @apply rounded-lg text-black px-3 pt-2;
    background-image: linear-gradient(to right, #d6bcfa, #b794f4);
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4pt #44337a;

    &:hover {
      box-shadow: 0px 6pt #44337a;
      .arrow {
        @apply pr-0;
      }
    }
  }

  .title {
    @apply text-2xl;
    text-transform: capitalize;
  }

  .tag {
    @apply text-purple-900 uppercase;
  }

  .arrow {
    @apply text-2xl text-purple-200 pr-2;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.04);
  }
}
</style>
