<template>
  <div class="proj-item">
    <div class="title">Some project title</div>
    <div class="desc">Some description of the project goes here</div>
    <div class="links">
      <a href="#">Read more</a> or <a href="#">view git</a>.
    </div>
  </div>
</template>

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
