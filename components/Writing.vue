<template>
  <div>
    <div class="blog p-3 rounded-lg text-black">
      <h1>{{title}}</h1>
      <h2>{{description}}</h2>
      <a :href="link" class="read-more">Read more &#x2192;</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    link: String
  }
};
</script>

<style lang="scss">
.blog {
  background-image: linear-gradient(to right, #d6bcfa, #b794f4);
  h1 {
    @apply text-2xl text-black;
  }
  h2 {
    @apply text-lg text-gray-800;
  }
}
</style>