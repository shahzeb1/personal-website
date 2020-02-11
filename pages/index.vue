<template>
  <div class="bg-gray-900 text-white min-h-screen p-5">
    <div class="heading">
      <Links />
    </div>
    <div class="content px-12">
      <h1>
        hello. my name is shahzeb and i am a computer scientist, photographer,
        and swimmer.
      </h1>
      <div class="section">
        <div class="item-desc">
          <h2>
            My
            <span class="text-white">technical projects</span>
            span many disciplines such as machine learning, IoT,
            web-development, messenger bots, and even game development.
          </h2>
        </div>
        <div class="flex flex-row justify-between flex-wrap">
          <Item
            v-for="(item, index) in projects"
            :key="index"
            :title="item.title"
            :subTitle="item.subTitle"
            :homeLinks="item.homeLinks"
            :slug="item.slug"
          />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>
            I enjoy writing about both computer science subjects and about general things going on in my life. You can
            <a
              href="http://shahzeb.svbtle.com/"
              target="blank"
            >visit my blog</a> to view all the posts.
          </h2>
        </div>
        <div class="flex flex-col justify-between my-3">
          <Writing
            :title="item.title"
            :description="item.description"
            :link="item.link"
            v-for="(item, index) in posts"
            :key="index"
          />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>
            I have a computer science degree from University of California,
            Davis (B.S.). Feel free to reach out.
          </h2>
        </div>
      </div>

      <div class="footer">
        <div class="buttons">
          <a href="mailto:shahzeb.k@me.com" class="button">Email</a>
          <a href="https://github.com/shahzeb1" class="button" target="_blank">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '~/components/Item.vue';
import Links from '~/components/Links.vue';
import Writing from '~/components/Writing.vue';
import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
  components: {
    Item,
    Links,
    Writing
  },
  asyncData() {
    const proj = client
      .getEntries({ content_type: 'items', order: '-fields.order' })
      .then(({ items }) => {
        const projects = [];
        items.map(({ fields }) => projects.push(fields));
        return {
          projects
        };
      })
      .catch(e => console.error(e));

    const writing = client
      .getEntries({ content_type: 'blog', order: 'sys.createdAt' })
      .then(({ items }) => {
        const posts = [];
        items.map(({ fields }) => posts.push(fields));
        return {
          posts
        };
      })
      .catch(e => console.error(e));

    return Promise.all([proj, writing])
      .then(([projects, posts]) => {
        return { projects: projects.projects, posts: posts.posts };
      })
      .catch(e => console.error(e));
  },
  head() {
    return {
      title: 'shahzeb.co | home'
    };
  },
  methods: {}
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
  @apply mt-6;

  .section {
    @apply mb-4 w-3/4 py-2;

    .item-desc {
      @apply w-3/4 mb-6;

      h2 {
        @apply mr-2  text-gray-500;
      }

      a {
        @apply text-white;
      }
    }
  }
}

.footer {
  @apply mb-6;

  .button {
    @apply bg-purple-600 p-2 mr-2 my-2 rounded text-white;
    &:hover {
      @apply bg-purple-700;
    }
  }
}
</style>
