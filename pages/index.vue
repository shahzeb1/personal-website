<template>
  <div class="bg-black text-white w-screen h-screen p-5">
    <heading>
      <h2>hello</h2>
      <h1>i'm shahzeb</h1>
    </heading>
    <content>
      <h3>projects</h3>
      <div class="flex flex-row justify-between my-3">
        <div class="p-3 rounded-lg text-black">
          <div>Some project title</div>
          <div>
            <a href="#">Git repo</a>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="p-3 bg-white rounded-lg text-black">
          <div>Some project title</div>
          <div>
            <a href="#">Git repo</a>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="p-3 bg-white rounded-lg text-black">
          <div>Some project title</div>
          <div>
            <a href="#">Git repo</a>
            <a href="#">Read more</a>
          </div>
        </div>
        <div class="p-3 bg-white rounded-lg text-black">
          <div>Some project title</div>
          <div>
            <a href="#">Git repo</a>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <h3>writing</h3>
      <h3>open source</h3>
      <h3>get in touch</h3>
    </content>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
h3 {
  @apply font-sans text-white font-normal text-2xl;
}
h2 {
  @apply font-sans text-white font-normal text-3xl;
}
h1 {
  @apply font-sans text-white text-5xl font-normal;
}
</style>
