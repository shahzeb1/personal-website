<template>
  <div class="bg-gray-900 text-white min-h-screen p-5">
    <div class="heading animated slideInLeft">
      <Links />
    </div>
    <div class="content px-12">
      <h1 class="animated slideInUp delay-1s">
        hello. my name is
        <span class="purple-gradient-text">shahzeb</span> and i am a computer scientist, photographer,
        and swimmer.
      </h1>
      <div class="section animated fadeIn delay-3s">
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
            :index="index+1"
          />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>
            I really
            <span class="text-white">enjoy photography</span>. Here are some recent images I have taken at various beaches.
          </h2>
        </div>
        <div class="flex flex-row flex-wrap">
          <Photography
            v-for="(item, index) in photography"
            :key="index"
            :title="item.title"
            :slug="item.slug"
            :image="item.image.fields.file.url"
          />
        </div>
      </div>

      <div class="section">
        <div class="item-desc">
          <h2>What am I currently working on? Well...</h2>
        </div>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">brb i am going to make my own music social network</p>&mdash; shahz (@shahzebdev)
          <a
            href="https://twitter.com/shahzebdev/status/1187987785308721153?ref_src=twsrc%5Etfw"
          >October 26, 2019</a>
        </blockquote>
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
import Photography from '~/components/Photography.vue';
import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
  components: {
    Item,
    Links,
    Writing,
    Photography
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

    const photog = client
      .getEntries({ content_type: 'photography', order: '-fields.order' })
      .then(({ items }) => {
        const photography = [];
        items.map(({ fields }) => photography.push(fields));
        return {
          photography
        };
      })
      .catch(e => console.error(e));

    return Promise.all([proj, writing, photog])
      .then(([projects, posts, photography]) => {
        return {
          projects: projects.projects,
          posts: posts.posts,
          photography: photography.photography
        };
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
  @apply font-sans font-thin text-white text-5xl font-normal w-3/4;

  .purple-gradient-text {
    @apply font-medium;
    background: -webkit-linear-gradient(#d6bcfa, #9f7aea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
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
        @apply text-white underline;
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
