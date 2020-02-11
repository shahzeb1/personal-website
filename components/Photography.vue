<template>
  <div>
    <div class="photography p-2">
      <img :src="`${image}?w=300`" :alt="title" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    slug: String,
    image: String
  }
};
</script>