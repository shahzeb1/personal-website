<template>
  <div class="proj-item">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ subTitle }}</div>
    <div class="links">
      <a :href="item.link" v-for="(item, index) in homeLinks" :key="index">{{
        item.title
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
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
