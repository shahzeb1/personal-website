<template>
  <div class="bg-gray-900 text-white w-screen m-h-screen p-5">
    <heading>
      <nav>
        <div class="emojii">
          <ul>
            <li @mouseover="hoverNav('homepage')" @mouseleave="hoverOfNav">
              &#128075;,
            </li>
            <li @mouseover="hoverNav('cs projects')" @mouseleave="hoverOfNav">
              👨‍💻
            </li>
            <li @mouseover="hoverNav('photography')" @mouseleave="hoverOfNav">
              &#128247;
            </li>
            <li @mouseover="hoverNav('swimming')" @mouseleave="hoverOfNav">
              &#127946;
            </li>
          </ul>
        </div>
        <div class="psst">
          <div class="arrow"></div>
          <div class="text">{{ state.navHoverText }}</div>
        </div>
      </nav>
      <h1>
        hello. my name is shahzeb and i am a computer scientist, photographer,
        and swimmer.
      </h1>
    </heading>
    <content>
      <h1>some of my <span class="underline">projects</span></h1>
      <div class="item-desc">
        These are a few of the projects I've done that are worth noting.
      </div>
      <div class="flex flex-row justify-between my-3">
        <Item />
        <Item />
        <Item />
      </div>
      <h3>writing</h3>
      <div class="flex flex-row justify-between my-3">
        <Item />
        <Item />
        <Item />
      </div>
      <h3>open source</h3>
      <div class="flex flex-row justify-between my-3">
        <Item />
        <Item />
        <Item />
      </div>
      <h3>photography</h3>
      <h3>get in touch</h3>
    </content>
  </div>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: {
    Item
  },
  data: function() {
    return {
      state: {
        navHoverText: 'psst... this is a <nav-bar>'
      }
    }
  },
  methods: {
    hoverNav: function(text) {
      this.state.navHoverText = text
    },
    hoverOfNav: function() {
      this.state.navHoverText = 'psst... this is a <nav-bar>'
    }
  }
}
</script>

<style lang="scss">
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
  @apply font-sans text-white text-5xl font-normal w-3/4;
}
nav {
  @apply flex flex-row content-center text-3xl mb-6;

  .emojii {
    @apply h-16;
    ul {
      @apply flex flex-row;
      cursor: pointer;

      li {
        @apply mr-3;
        &:last-child {
          @apply mr-0;
        }
      }
    }
  }

  .psst {
    @apply flex flex-row content-center ml-3;
    height: fit-content;

    .text {
      @apply text-base bg-gray-400 text-gray-800 px-2 py-2 mt-1 rounded;
    }

    .arrow {
      width: 0;
      height: 0;
      border-top: 6pt solid transparent;
      border-bottom: 6pt solid transparent;
      border-right: 12pt solid #cbd5e0;
      content: '';
      margin-top: 12pt;
    }
  }
}
content {
  @apply bg-yellow-300 mt-6;
}
</style>
