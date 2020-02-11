<template>
  <div>
    <div class="blog p-3 mb-3 rounded-lg text-black">
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
  background-image: linear-gradient(to right, #4fd1c5, #38b2ac);
  h1 {
    @apply text-2xl text-black;
  }
  h2 {
    @apply text-lg text-gray-800;
  }
}
</style>