<template>
  <div class="bg-gray-900 text-white min-h-screen p-5">
    <div class="heading">
      <Links />
    </div>
    <div class="content content-center px-12 flex flex-row justify-between">
      <div class="left">
        <h1>Project title</h1>
        <div class="py-6">
          <img src="http://via.placeholder.com/500x300" alt="Placeholder" />
        </div>
        <p>A long description of the project</p>
      </div>
      <div class="right content-center">
        <div class="pb-10">
          <h3>Tech used</h3>
          <h2>GraphQL, HTML, CSS, React.</h2>
        </div>
        <button>Learn more</button>
      </div>
    </div>
  </div>
</template>

<script>
import Links from '~/components/Links.vue';
export default {
  components: {
    Links
  }
};
</script>

<style lang="scss">
h3 {
  @apply font-sans text-white font-normal text-2xl;
}

h2 {
  @apply font-sans text-white font-normal text-3xl;
}

h1 {
  @apply font-sans text-white text-5xl font-normal w-3/4;
}

.content {
  button {
    @apply bg-orange-500 rounded p-2 mr-2;
  }
}
</style>