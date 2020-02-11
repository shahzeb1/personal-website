<template>
  <div class="bg-gray-900 text-white min-h-screen p-5">
    <div class="heading">
      <Links />
    </div>
    <div class="px-12 flex flex-row justify-between">
      <div class="item-content left pb-12 w-3/4">
        <h1 class="animated slideInUp">{{ post.fields.title }}</h1>
        <div class="animated fadeIn delay-1s">
          <h2>{{ post.fields.subTitle }}</h2>
          <div v-if="post.fields.youtube" class="youtube py-6 flex justify-center">
            <iframe
              width="660"
              height="415"
              :src="`https://www.youtube.com/embed/${post.fields.youtube}`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div v-else-if="post.fields.vimeo" class="vimeo py-6 flex justify-center">
            <iframe
              :src="`https://player.vimeo.com/video/${post.fields.vimeo}`"
              width="640"
              height="415"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
          <div v-else class="py-6 flex justify-center">
            <img
              :src="`${post.fields.coverPhoto.fields.file.url}?w=700`"
              :alt="post.fields.coverPhoto.fields.description"
            />
          </div>
          <div class="body-content">
            <vue-markdown>{{ post.fields.body }}</vue-markdown>
          </div>
        </div>
      </div>
      <div class="right pt-16 w-1/4 animated slideInRight">
        <div class="pb-4">
          <h3 class="text-gray-500">Tech</h3>
          <h2 class="purple-gradient-text">{{post.fields.tech}}</h2>
        </div>
        <h3 class="text-gray-500">Links</h3>
        <div class="flex flex-wrap button-group">
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
      title: `shahzeb.co | ${this.post.fields.title}`
    };
  }
};
</script>

<style lang="scss">
.item-content {
  h3 {
    @apply font-sans text-white font-normal text-2xl;
  }

  h2 {
    @apply font-sans text-gray-500 font-normal text-3xl;
  }

  h1 {
    @apply font-sans text-white text-5xl font-normal;
    text-transform: capitalize;
  }

  img {
    max-width: 600pt;
  }

  .body-content {
    h2 {
      @apply py-2;
    }
    p {
      @apply py-2;
    }
    a {
      @apply underline;
    }
    ul {
      @apply list-inside list-disc;
    }
    ol {
      @apply list-inside list-decimal;
    }
  }
}
.right {
  .purple-gradient-text {
    background: -webkit-linear-gradient(#d6bcfa, #9f7aea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .button {
    @apply bg-purple-600 p-2 mr-2 my-2 rounded;
    &:hover {
      @apply bg-purple-700;
    }
  }
}
</style>
