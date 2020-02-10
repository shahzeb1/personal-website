<template>
  <div class="bg-gray-900 text-white min-h-screen p-5">
    <div class="heading">
      <Links />
    </div>
    <div class="content px-12 flex flex-row justify-between">
      <div class="left pb-12 w-3/4">
        <h1>{{ post.fields.title }}</h1>
        <div class="py-6 flex justify-center">
          <img :src="`${post.fields.coverPhoto.fields.file.url}`" alt="Placeholder" />
        </div>
        <h2>{{ post.fields.subTitle }}</h2>
        <div class="body-content">
          <vue-markdown>{{ post.fields.body }}</vue-markdown>
        </div>
      </div>
      <div class="right pt-16 w-1/4">
        <div class="pb-10">
          <h3 class="text-gray-500">Tech used</h3>
          <h2 class="purple-gradient-text">{{post.fields.tech}}</h2>
        </div>
        <a
          :href="item.link"
          v-for="(item, index) in post.fields.homeLinks"
          :key="index"
          class="button"
          target="_blank"
        >{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import Links from '~/components/Links.vue';
import { createClient } from '~/plugins/contentful.js';

const client = createClient();
export default {
  components: {
    Links,
    VueMarkdown
  },
  asyncData({ env, params }) {
    return client
      .getEntries({ content_type: 'items', 'fields.slug': params.slug })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  },
  head() {
    return {
      title: 'shahzeb.co | project'
    };
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

img {
  max-width: 600pt;
}

.content {
  .button {
    @apply bg-orange-500 rounded p-2 mr-2;
  }
  .body-content {
    a {
      @apply underline;
    }
    ul {
      @apply list-inside list-disc;
    }
  }
  .purple-gradient-text {
    background: -webkit-linear-gradient(#a3bffa, #667eea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
